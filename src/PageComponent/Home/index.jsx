import PageBanner from "@/Components/Home/PageBanner";
import React from "react";
import bannerData from "@/Constants/Home/PageBanner/PageBanner";
import industries from "@/Constants/Home/Industry/Industries";
import features from "@/Constants/Home/MetaAdds/adds";
import Industries from "@/Components/Home/Industry";
import { MetaAdsSection } from "@/Components/Home/MetaAdds/MetaAdsSection";
import metaAdsData from "@/Constants/Home/MetaAddsData/metadata";
import MetaAdsPackage from "@/Components/Home/MetaAddsPackage/MetaAddsPackage";
import SuccessStories from "@/Components/Home/Success/SuccessStories";
import successStoriesData from "@/Constants/Home/success/successData";
import PromotionCard from "@/Components/Home/Promotion/PromotionCard";
import promotionData from "@/Constants/Home/Promotion/promotionData";
import JoinInvictus from "@/Components/Home/JoinVictus/JoinInvictus";
import cardsData from "@/Constants/Home/JoinInvictus/joininvData";
import ContactSection from "@/Components/Home/Contact/ContactSelection";
import contactButtonsData from "@/Constants/Home/Contact/contactButtonsData";
import ContactForm from "@/Components/Home/ContactWithUs/ContactForm";
import MetaSuccess from "@/Components/Home/SuccessGallery/SuccessGallery";
import { Pricing } from "@/Components/Home/Pricing/Pricing";
import { pricing } from "@/Constants/Home/pricing/pricing";
import { FAQ } from "@/Components/Home/Faq";
import faq from "@/Constants/Home/faq/faq";

export const HomePageComponent = () => {
  return (
    <>
      <PageBanner
        title={bannerData.title}
        description={bannerData.description}
        buttonTitle={bannerData.buttonTitle}
        imagePath={bannerData.imagePath}
      />
      <MetaAdsSection
        title="Why Choose"
        subtitle="Meta Ads for Your Business?"
        features={features}
      />
      <Industries heading={"Serving Industries"} industries={industries} />
      <MetaAdsPackage {...metaAdsData} />
      <SuccessStories stories={successStoriesData} />
      <PromotionCard
        title={promotionData.title}
        subtitle={promotionData.subtitle}
        logos={promotionData.logos}
        backgroundImage={promotionData.backgroundImage}
        discountText={promotionData.discountText}
        promotionDescription={promotionData.promotionDescription}
      />
      {/* <JoinInvictus cardsData={cardsData} />
      <ContactSection contactButtons={contactButtonsData} /> */}
      <MetaSuccess />

      <Pricing
        title={pricing.title}
        buttonText={pricing.buttonText}
        featuresList1={pricing.featuresList1}
        featuresList2={pricing.featuresList2}
        price={pricing.price}
        priceSubTitle={pricing.priceSubTitle}
        secondButtonText={pricing.secondButtonText}
        svg={pricing.svg}
        titleSpan={pricing.titleSpan}
      />
      <ContactForm />
      <FAQ
        title={faq?.title}
        data={faq?.data}
        iconCollapsed={faq?.iconCollapsed}
        iconOpen={faq.iconOpen}
      />
    </>
  );
};
