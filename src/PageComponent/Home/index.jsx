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
    </>
  );
};
