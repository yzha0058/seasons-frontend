import React, { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { DivWrapper } from "./screens/DivWrapper";
import { FrontPage } from "./screens/FrontPage/FrontPage";
import { Page } from "./screens/Page";
import { PageScreen } from "./screens/PageScreen";
import { Screen3 } from "./screens/Screen3";
// import { Screen4 } from "./screens/Screen4";
import { Screen5 } from "./screens/Screen5";
import { Screen5result } from "./screens/Screen5result";
import { Screen6 } from "./screens/Screen6";
import { Screen7 } from "./screens/Screen7";
import { Screen8 } from "./screens/Screen8";
import { BodyInput } from "./screens/BodyDet/BodyInput";
import { BodyDet } from "./screens/BodyDet/BodyDet";
import { BodyResult } from "./screens/BodyResult/BodyResult";
import { Recommend } from "./screens/Recommend";
import StyleRecommendation from './screens/Recommend/StyleRecommendation';
import HairRecommendation from './screens/Recommend/HairRecommendation';
import MakeupRecommendation from './screens/Recommend/MakeupRecommendation';
import AccessoryRecommendation from "./screens/Recommend/AccessoryRecommendation";
import StyleOutfitRecommendation from "./screens/Recommend/StyleOutfitRecommendation";
import OutfitRecommendation from './screens/Recommend/OutfitRecommendation';
import GeneratePDF from './screens/generatePDF'
import ExportPage from './screens/Export/ExportPage'
// import { Screen9 } from "./screens/Screen9";

export const App = () => {
  const [capturedImage, setCapturedImage] = useState(null);
  const [apiResponse, setApiResponse] = useState(null);

  const [capturedBodyImage, setCapturedBodyImage] = useState(null);
  const [bodyApiResponse, setBodyApiResponse] = useState(null);

  const [sharedApiResponse, setSharedApiResponse] = useState(null);

  const [height, setHeight] = useState("");
  const [chest, setChest] = useState("");
  const [waist, setWaist] = useState("");
  const [hips, setHips] = useState("");

  const router = createBrowserRouter([
    {
      path: "/",
      element: <FrontPage />,
    },
    // {
    //   path: "/page-46",
    //   element: <Page />,
    // },
    {
      path: "/agreement",
      element: <PageScreen />,
    },
    {
      path: "/body-data",
      element: <DivWrapper />,
    },
    {
      path: "/page-51",
      element: <Screen3 />,
    },
    {
      path: "/face-det",
      element: (
        <Screen5
          setCapturedImage={setCapturedImage}
          setApiResponse={setApiResponse}
        />
      ),
    },
    {
      path: "/face-result",
      element: <Screen5result capturedImage={capturedImage} apiResponse={apiResponse} setSharedApiResponse={setSharedApiResponse}/>,
    },
    {
      path: "/body-input",
      element: <BodyInput
        height={height}
        setHeight={setHeight}
        chest={chest}
        setChest={setChest}
        waist={waist}
        setWaist={setWaist}
        hips={hips}
        setHips={setHips}
      />,
    },
    {
      path: "/body-det",
      element: (
        <BodyDet
          setCapturedBodyImage={setCapturedBodyImage}
          setBodyApiResponse={setBodyApiResponse}
          sharedApiResponse={sharedApiResponse}
        />
      ),
    },
    {
      path: "/body-result",
      element: <BodyResult capturedImage={capturedBodyImage} apiResponse={bodyApiResponse} />,
    },
    {
      path: "/page-34",
      element: <Screen6 />,
    },
    {
      path: "/page-54",
      element: <Screen7 />,
    },
    {
      // 补充回答
      path: "/additional",
      element: <Screen8 />,
    },
    // {
    //   // 推荐页
    //   path: "/recommend",
    //   element: <Recommend />,
    // },
    {
      // 推荐页
      path: "/style-recommendation",
      element: <StyleRecommendation
        apiResponse={bodyApiResponse}
        />,
    },
    {
      // 推荐页
      path: "/hairstyle-recommendation",
      element: <HairRecommendation
        apiResponse={bodyApiResponse}
      />,
    },
    {
      // 推荐页
      path: "/makeup-recommendation",
      element: <MakeupRecommendation/>,
    },
    {
      // 推荐页
      path: "/accessory-recommendation",
      element: <AccessoryRecommendation
      sharedApiResponse={sharedApiResponse}
      />,
    },
    {
      // 推荐页
      path: "/style-outfit-recommendation",
      element: <StyleOutfitRecommendation
        apiResponse={bodyApiResponse}
      />,
    },
    {
      // 推荐页
      path: "/outfit-recommendation",
      element: <OutfitRecommendation
        apiResponse={bodyApiResponse}
      />,
    },
    {
      // 生成报告，上传
      path: "/report",
      element: <GeneratePDF
      sharedApiResponse={sharedApiResponse}
      apiResponse={bodyApiResponse}
      />,
    },
    {
      // 生成报告，上传
      path: "/export",
      element: <ExportPage/>,
    },

  ]);

  return <RouterProvider router={router} />;
};
