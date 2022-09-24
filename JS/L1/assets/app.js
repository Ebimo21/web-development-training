import React, { Fragment, useCallback, useState } from "react";
import Card from "../components/Card/Card";
import Layout from "../components/Layouts";
import Section from "../components/Layouts/Section";
import { cardItems } from "../globals";
import SEO from "../components/SEO";
import Link from "../components/Link";
import useActiveWeb3React from "../hooks/useActiveWeb3React";
import useToast from "../hooks/useToast";
import { getKrlBabClubContract } from "../utils/contractHelpers";
import Banner from "../components/Tools/Banner";
import ConnectWalletButton from "../components/Buttons/ConnectWalletButton";
import { FaDiscord } from "react-icons/fa";
import Button from "../components/Buttons/Button";
import { StaticImage } from "gatsby-plugin-image";

export default function KryptoliteBabClubPage() {
  const [eligible, setEligible] = useState(false);
  const [claimedNFT, setClaimedNFT] = useState(false);
  const [requesting, setRequesting] = useState(false);
  // Show discord
  const [eligibilityChecked, setEligibilityChecked] = useState(false);
  const [triedClaim, setTriedClaim] = useState(false);

  const { active, account, library } = useActiveWeb3React();
  const { toastError, toastSuccess } = useToast();

  const checkEligiblity = useCallback(async () => {
    setRequesting(true);
    try {
      if (account) {
        const contract = getKrlBabClubContract();
        const isEligible = await contract.isEligible(account);
        if (isEligible === true) {
          setEligible(true);
          setEligibilityChecked(true);
        } else {
          setEligible(false);
          toastError("Sorry! You aren't eligible to Mint.");
          setEligibilityChecked(true);
        }
      } else {
        setEligible(false);
      }
    } catch (error) {
      console.error(error);
      setEligible(false);
      toastError("Transaction failed, you can try again.");
    } finally {
      setRequesting(false);
    }
  }, [account]);

  const claimNFT = useCallback(async () => {
    setRequesting(true);
    try {
      if (account && library) {
        const contract = getKrlBabClubContract(library.getSigner());

        // check if user has minted
        const hasMinted = await contract.hasMinted(account);

        if (!hasMinted) {
          const tx = await contract.mint();
          await tx.wait();
          setClaimedNFT(true);
          toastSuccess("Success!");
          setTriedClaim(true);
        } else {
          // User has previously minted
          toastError("Cannot mint more");
          setTriedClaim(true);
        }
      } else {
        setClaimedNFT(false);
      }
    } catch (error) {
      setClaimedNFT(false);
      toastError("Transaction failed, you can try again.");
    } finally {
      setRequesting(false);
    }
  }, [account, library]);

  return (
    <Layout>
      <SEO
        title="The KRYPTOLITE Universe LaunchPad"
        description="KRYPTOLITE will empower cryptocurrency projects with the ability to distribute tokens and raise liquidity. Staking KRL-LP is required to guarantee an allocation based on the pool weight."
      />
      <Section
        containerClass="bg-[url('./images/launchpad-cover.jpg')] bg-cover bg-center"
        className="flex flex-col gap-20 items-center justify-center h-[500px] bg-gradient-to-b from-[#250045]/60
        to-[#29004E]/30 !max-w-none"
      >
        <Section className="text-white text-center">
          <h1 className="text-4xl lg:text-6xl font-black">KRYPTOLITE BAB CLUB</h1>
          <p className="text-xl text-[#D2F804] max-w-[820px] lg:text-[29px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque nibh tellus praesent tortor condimentum.
          </p>
        </Section>
        <Link to="#mint-nft" as="button" className="inline-flex space-x-2 rounded-none ">
          <span>MINT YOUR NFT NOW</span>
        </Link>
      </Section>

      <Section padding containerClass="bg-[#dedede40]" className="flex flex-col md:flex-row gap-10 md:items-center">
        <div className="max-w-md w-full mx-auto bg-white shadow-[0_4px_10px_2px_rgba(0,0,0,0.25)] p-2">
          <StaticImage className="w-full" src="../images/monkey.png" alt="KRLBabCLubNFT" />
        </div>
        <div id="mint-nft">
          <h2 className="card-title text-[32px] md:text-[48px] text-center md:text-left">Ultricies molestie.</h2>
          {!active && (
            <Banner type="info" className="md:text-left">
              To be eligible to claim the NFT, you have to connect a wallet address that has you have used to mint the
              binance nft
            </Banner>
          )}
          {active && !eligible && (
            <Fragment>
              <Banner type="info" className="md:text-left mb-6">
                {eligibilityChecked
                  ? `Not eligible? Don't fret! Join our discord server today to get daily points which can be
                used to purchase NFTs and upgrade your role in The Kryptolite Universe.`
                  : "Try checking your eligibilty status"}
              </Banner>
              {eligibilityChecked ? (
                <Link
                  to="https://discord.gg/9aY3gRPdQx"
                  className="rounded-none w-auto mx-auto flex items-center gap-2"
                  as="button"
                >
                  <FaDiscord />
                  Join Discord
                </Link>
              ) : (
                <Button
                  className="rounded-none block w-auto mx-auto md:mx-0"
                  onClick={checkEligiblity}
                  disabled={requesting}
                  loading={requesting}
                >
                  CHECK ELIGIBILITY
                </Button>
              )}
            </Fragment>
          )}
          {active && eligible && !claimedNFT && (
            <Fragment>
              <Banner type="success" className="md:text-left mb-6">
                {triedClaim ? (
                  <p>
                    Hey! You've already minted your #KryptoliteBabClubNFT <br /> <br /> Join our discord server to get
                    daily points which can be used to purchase NFT's and upgrade your role in The Kryptolite Universe
                  </p>
                ) : (
                  "You are eligible"
                )}
              </Banner>
              {triedClaim ? (
                <Link
                  to="https://discord.gg/9aY3gRPdQx"
                  className="rounded-none w-auto mx-auto flex items-center gap-2"
                  as="button"
                >
                  <FaDiscord />
                  Join Discord
                </Link>
              ) : (
                <Button
                  className="rounded-none block w-auto mx-auto"
                  onClick={claimNFT}
                  disabled={requesting}
                  loading={requesting}
                >
                  CLAIM YOUR NFT NOW
                </Button>
              )}
            </Fragment>
          )}
          <div className="card-actions justify-end my-4">
            {!active && <ConnectWalletButton className="w-auto mx-auto block rounded-none" />}
          </div>
        </div>
      </Section>

      <Section>
        <h1 className="text-center p-10">Our Top Product</h1>
        <Section padding className="lg:flex-row flex-col flex flex-wrap justify-around  items-center ">
          {cardItems.map((item) => {
            return <Card key={item.id} id={item.id} title={item.title} content={item.content} src={item.src}></Card>;
          })}
        </Section>
      </Section>
    </Layout>
  );
}












import React from "react";	
import Card from "../components/Card/Card";	
import Layout from "../components/Layouts";	
import Section from "../components/Layouts/Section";	
import { cardItems } from "../globals";	
import SEO from "../components/SEO";	
import Link from "../components/Link";	

export default function launchpad(){	
  return (	
    <Layout>	
      <SEO	
        title="The KRYPTOLITE Universe LaunchPad"	
        description="KRYPTOLITE will empower cryptocurrency projects with the ability to distribute tokens and raise liquidity. Staking KRL-LP is required to guarantee an allocation based on the pool weight."	
      />	
      <Section	
        containerClass="bg-[url('./images/launchpad-cover.jpg')] bg-cover bg-center"	
        className="flex flex-col gap-20 items-center justify-center h-[500px] bg-gradient-to-b from-[#250045]/60	
        to-[#29004E]/30 !max-w-none"	
      >	
        <Section className="text-white text-center ">	
          <h1 className="text-4xl lg:text-6xl font-black">KRYPTOLITE BAB CLUB</h1>	
          <p className="text-xl text-[#D2F804] max-w-[820px] lg:text-[29px]">	
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque nibh tellus praesent tortor condimentum.	
          </p>	

        </Section>	
          <Link to="/swap" as="button" className="inline-flex space-x-2 rounded-none ">	
            <span>MINT YOUR NFT NOW</span>	
          </Link>	
      </Section>	

      <Section  containerClass="bg-[#dedede40]">	
        <Section padding className="flex flex-col md:flex-row gap-10 items-stretch">	
          <figure ><img width="100%" max-width="244px" height="444px" className={`max-w-[244px] m-auto block md:max-w-[444px] bg-[#FFFFFF] shadow-[0_4px_10px_2px_rgba(0,0,0,0.25)]`}  src="./images/monkey.png" alt="Album"/></figure>	
          <div className="card-body md:max-w-[600px]">	
              <h2 className="card-title text-[32px] md:text-[48px] text-center md:text-left">Ultricies molestie.</h2>	
              <p className="text-base text-center md:text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa convallis cras viverra mauris purus. </p>	
              <div className="card-actions justify-end">	
                <Link to="/swap" as="button" className="block md:inline-flex w-[256px] space-x-2 rounded-none m-auto mt-20 ">	
                  <span>MINT YOUR NFT NOW</span>	
                </Link>	
              </div>	
          </div>	
        </Section>	
      </Section>	

      <Section>	
        <h1 className="text-center p-10">Our Top Product</h1>	
        <Section padding className="lg:flex-row flex-col flex flex-wrap justify-around  items-center ">	
            {cardItems.map(item =>{	
                return (	
                    <Card key={item.id} id={item.id} title={item.title} content={item.content} src={item.src}></Card>	
            )	
            })}	
        </Section>	

      </Section>	

    </Layout>	
  )	
}