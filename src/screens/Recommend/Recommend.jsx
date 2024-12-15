import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState } from 'react';
import BrandRecommendationCard from './cards/BrandRecommendationCard';

export const Recommend = () => {
  // Sample data for multiple brand cards
  const brandDataExample1 = [
    {
      images: [
        { url: 'https://c.animaapp.com/VZKg7vEK/img/image@2x.png', alt: 'Image' },
        { url: 'https://c.animaapp.com/VZKg7vEK/img/image-3@2x.png', alt: 'Image' },
      ],
      brandNames: ['Chanel', 'Shushu Tong'],
    },
    {
      images: [
        { url: 'https://c.animaapp.com/VZKg7vEK/img/image-1@2x.png', alt: 'Image' },
        { url: 'https://c.animaapp.com/VZKg7vEK/img/image-8@2x.png', alt: 'Image' },
      ],
      brandNames: ['Miumiu', 'RUI'],
    },
    {
      images: [
        { url: 'https://c.animaapp.com/VZKg7vEK/img/image-2@2x.png', alt: 'Image' },
        { url: 'https://c.animaapp.com/VZKg7vEK/img/image-9@2x.png', alt: 'Image' },
      ],
      brandNames: ['MSGM', 'Calvin Luo'],
    },
    // Add more items as needed
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#eef0f0",
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#eef0f0",
          overflow: "hidden",
          width: "1920px",
          height: "1080px",
          position: "relative",
        }}
      >
        <BrandRecommendationCard
          title="品牌推荐"
          brandData={brandDataExample1}
          width="500px"   // Example custom width
          height="320px"  // Example custom height
          position="absolute"
          top="204px"
          left="597px"
        />

        <Card
          sx={{
            width: "499px",
            height: "823px",
            position: "absolute",
            top: "204px",
            left: "1132px",
            borderRadius: "16px 0px 16px 0px",
            boxShadow: "0px 0px 7px #00000040",
          }}
        >
          <CardContent>
            <Typography
              variant="h6"
              sx={{ position: "absolute", top: "31px", left: "31px" }}
            >
              少女型风格穿搭博主推荐：小红书
            </Typography>
            <Box
              sx={{
                position: "absolute",
                width: "146px",
                height: "44px",
                top: "72px",
                left: "63px",
                borderRadius: "65px",
                background:
                  "conic-gradient(from 180deg at 50% 50%, rgb(156,254,218.72) 0deg, rgb(156,254,183.44) 360deg)",
              }}
            >
              <Typography
                variant="body1"
                sx={{ position: "absolute", top: "11px", left: "39px" }}
              >
                晴木南南-
              </Typography>
            </Box>
            <Box
              sx={{
                position: "absolute",
                width: "146px",
                height: "44px",
                top: "72px",
                left: "291px",
                borderRadius: "65px",
                background:
                  "conic-gradient(from 180deg at 50% 50%, rgb(156,254,218.72) 0deg, rgb(156,254,183.44) 360deg)",
              }}
            >
              <Typography
                variant="body1"
                sx={{ position: "absolute", top: "11px", left: "17px" }}
              >
                廖上觉和廖下觉
              </Typography>
            </Box>
            <Box
              sx={{
                position: "absolute",
                width: "203px",
                height: "441px",
                top: "132px",
                left: "9px",
                borderRadius: "15px",
                border: "1px solid black",
                backgroundImage:
                  "url(https://c.animaapp.com/VZKg7vEK/img/iphone-14---15-pro---1@2x.png)",
                backgroundSize: "cover",
                backgroundPosition: "50% 50%",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                width: "203px",
                height: "441px",
                top: "132px",
                left: "262px",
                borderRadius: "15px",
                border: "1px solid black",
                backgroundImage:
                  "url(https://c.animaapp.com/VZKg7vEK/img/iphone-14---15-pro---2@2x.png)",
                backgroundSize: "cover",
                backgroundPosition: "50% 50%",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                width: "301px",
                height: "95px",
                top: "682px",
                left: "102px",
                borderRadius: "75px",
                background:
                  "conic-gradient(from 180deg at 50% 50%, rgb(156,254,218.72) 0deg, rgb(156,254,183.44) 360deg)",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  position: "absolute",
                  top: "29px",
                  left: "54px",
                  fontWeight: "bold",
                }}
              >
                下一步：发型
              </Typography>
            </Box>
          </CardContent>
        </Card>

        <Card
          sx={{
            width: "499px",
            height: "328px",
            position: "absolute",
            top: "535px",
            left: "62px",
            borderRadius: "16px 0px 16px 0px",
            boxShadow: "0px 0px 7px #00000040",
          }}
        >
          <CardContent>
            <Typography
              variant="h6"
              sx={{ position: "absolute", top: "26px", left: "42px" }}
            >
              发型推荐
            </Typography>
            <CardMedia
              component="img"
              sx={{
                width: "178px",
                height: "212px",
                position: "absolute",
                top: "66px",
                left: "35px",
              }}
              image="https://c.animaapp.com/VZKg7vEK/img/rectangle-43@2x.png"
              alt="Rectangle"
            />
            <CardMedia
              component="img"
              sx={{
                width: "178px",
                height: "212px",
                position: "absolute",
                top: "66px",
                left: "221px",
              }}
              image="https://c.animaapp.com/VZKg7vEK/img/rectangle-44@2x.png"
              alt="Rectangle"
            />
            <CardMedia
              component="img"
              sx={{
                width: "102px",
                height: "212px",
                position: "absolute",
                top: "66px",
                left: "407px",
              }}
              image="https://c.animaapp.com/VZKg7vEK/img/rectangle-45@2x.png"
              alt="Rectangle"
            />
            <Typography
              variant="body1"
              sx={{ position: "absolute", top: "282px", left: "92px" }}
            >
              小卷发
            </Typography>
            <Typography
              variant="body1"
              sx={{ position: "absolute", top: "282px", left: "278px" }}
            >
              清纯直发
            </Typography>
            <Typography
              variant="body1"
              sx={{ position: "absolute", top: "282px", left: "479px" }}
            >
              麻
            </Typography>
          </CardContent>
        </Card>

        <Card
          sx={{
            width: "499px",
            height: "492px",
            position: "absolute",
            top: "535px",
            left: "597px",
            borderRadius: "16px 0px 16px 0px",
            boxShadow: "0px 0px 7px #00000040",
          }}
        >
          <CardContent>
            <Typography
              variant="h6"
              sx={{ position: "absolute", top: "9px", left: "34px" }}
            >
              店铺推荐 1/3
            </Typography>
            <Box
              sx={{
                position: "absolute",
                width: "168px",
                height: "44px",
                top: "27px",
                left: "296px",
                borderRadius: "65px",
                background:
                  "conic-gradient(from 180deg at 50% 50%, rgb(156,254,218.72) 0deg, rgb(156,254,183.44) 360deg)",
              }}
            />
            <Typography
              variant="body1"
              sx={{ position: "absolute", top: "38px", left: "316px" }}
            >
              店名：LEDIN乐町
            </Typography>
            <CardMedia
              component="img"
              sx={{
                width: "153px",
                height: "225px",
                position: "absolute",
                top: "95px",
                left: "35px",
              }}
              image="https://c.animaapp.com/VZKg7vEK/img/image-4@2x.png"
              alt="Image"
            />
            <CardMedia
              component="img"
              sx={{
                width: "173px",
                height: "358px",
                position: "absolute",
                top: "85px",
                left: "25px",
              }}
              image="https://c.animaapp.com/VZKg7vEK/img/image-5@2x.png"
              alt="Image"
            />
            <Box
              sx={{
                position: "absolute",
                width: "153px",
                height: "94px",
                top: "339px",
                left: "35px",
                borderRadius: "0px 0px 0px 5px",
                background:
                  "linear-gradient(180deg, rgba(76.91,86.76,82.63,0.5) 0%, rgba(176.47,176.47,176.47,0.5) 100%)",
              }}
            />
            <CardMedia
              component="img"
              sx={{
                width: "173px",
                height: "358px",
                position: "absolute",
                top: "85px",
                left: "198px",
              }}
              image="https://c.animaapp.com/VZKg7vEK/img/image-6@2x.png"
              alt="Image"
            />
            <CardMedia
              component="img"
              sx={{
                width: "138px",
                height: "358px",
                position: "absolute",
                top: "85px",
                left: "371px",
              }}
              image="https://c.animaapp.com/VZKg7vEK/img/image-7@2x.png"
              alt="Image"
            />
            <Box
              sx={{
                position: "absolute",
                width: "122px",
                height: "365px",
                top: "83px",
                left: "377px",
                borderRadius: "16px 0px 16px 0px",
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgb(255,255,255) 100%)",
              }}
            />
            <IconButton
              sx={{ position: "absolute", top: "219px", left: "11px" }}
            >
              <ArrowBackIosIcon />
            </IconButton>
            <IconButton
              sx={{ position: "absolute", top: "219px", left: "451px" }}
            >
              <ArrowForwardIosIcon />
            </IconButton>
            <Typography
              variant="body1"
              sx={{
                position: "absolute",
                top: "357px",
                left: "47px",
                color: "white",
              }}
            >
              绒感磨毛印花长袖T恤上衣
            </Typography>
            <Typography
              variant="body1"
              sx={{
                position: "absolute",
                top: "402px",
                left: "47px",
                color: "#afffe2",
              }}
            >
              ¥ 167
            </Typography>
            <Typography
              variant="body1"
              sx={{
                position: "absolute",
                top: "357px",
                left: "222px",
                color: "white",
              }}
            >
              拼接衬衫领羽绒服女羽绒菱格外套
            </Typography>
            <Typography
              variant="body1"
              sx={{
                position: "absolute",
                top: "402px",
                left: "222px",
                color: "#b0ffe3",
              }}
            >
              ¥ 416
            </Typography>
            <Typography
              variant="body1"
              sx={{
                position: "absolute",
                top: "357px",
                left: "398px",
                color: "white",
              }}
            >
              韩系仿羊羔毛外套毛绒上衣
            </Typography>
            <Typography
              variant="body1"
              sx={{
                position: "absolute",
                top: "402px",
                left: "398px",
                color: "#b0ffe3",
              }}
            >
              ¥ 399
            </Typography>
          </CardContent>
        </Card>

        <Card
          sx={{
            width: "499px",
            height: "139px",
            position: "absolute",
            top: "888px",
            left: "62px",
            borderRadius: "16px 0px 16px 0px",
            boxShadow: "0px 0px 7px #00000040",
          }}
        >
          <CardContent>
            <Typography
              variant="h6"
              sx={{ position: "absolute", top: "25px", left: "42px" }}
            >
              穿搭元素
            </Typography>
            <Box
              sx={{
                position: "absolute",
                width: "128px",
                height: "47px",
                top: "66px",
                left: "45px",
                borderRadius: "32px",
                background:
                  "conic-gradient(from 180deg at 50% 50%, rgb(156,254,218.72) 0deg, rgb(156,254,183.44) 360deg)",
              }}
            >
              <Typography
                variant="body1"
                sx={{ position: "absolute", top: "13px", left: "47px" }}
              >
                蕾丝
              </Typography>
            </Box>
            <Box
              sx={{
                position: "absolute",
                width: "138px",
                height: "47px",
                top: "66px",
                left: "184px",
                borderRadius: "32px",
                background:
                  "conic-gradient(from 180deg at 50% 50%, rgb(156,254,218.72) 0deg, rgb(156,254,183.44) 360deg)",
              }}
            >
              <Typography
                variant="body1"
                sx={{ position: "absolute", top: "13px", left: "10px" }}
              >
                A字短裙
              </Typography>
            </Box>
            <Box
              sx={{
                position: "absolute",
                width: "116px",
                height: "47px",
                top: "66px",
                left: "333px",
                borderRadius: "32px",
                background:
                  "conic-gradient(from 180deg at 50% 50%, rgb(156,254,218.72) 0deg, rgb(156,254,183.44) 360deg)",
              }}
            >
              <Typography
                variant="body1"
                sx={{ position: "absolute", top: "13px", left: "9px" }}
              >
                蝴蝶结
              </Typography>
            </Box>
            <Box
              sx={{
                position: "absolute",
                width: "39px",
                height: "47px",
                top: "66px",
                left: "460px",
                borderRadius: "32px 0px 0px 32px",
                background:
                  "conic-gradient(from 180deg at 50% 50%, rgb(156,254,218.72) 0deg, rgb(156,254,183.44) 360deg)",
              }}
            />
          </CardContent>
        </Card>

        <Box
          sx={{
            position: "absolute",
            width: "513px",
            height: "353px",
            top: "164px",
            left: "55px",
          }}
        >
          <CardMedia
            component="img"
            sx={{
              width: "513px",
              height: "80px",
              position: "absolute",
              top: "33px",
              left: 0,
            }}
            image="https://c.animaapp.com/VZKg7vEK/img/subtract.svg"
            alt="Subtract"
          />
          <Box
            sx={{
              position: "absolute",
              width: "203px",
              height: "60px",
              top: 0,
              left: "7px",
              borderRadius: "37px",
              boxShadow: "0px 0px 7px #00000040",
              background:
                "conic-gradient(from 180deg at 50% 50%, rgb(156,254,218.72) 0deg, rgb(156,254,183.44) 360deg)",
            }}
          />
          <Typography
            variant="h6"
            sx={{ position: "absolute", top: "19px", left: "79px" }}
          >
            少女感
          </Typography>
          <Typography
            variant="h6"
            sx={{ position: "absolute", top: "102px", left: "49px" }}
          >
            风格解释
          </Typography>
          <Typography
            variant="h6"
            sx={{ position: "absolute", top: "197px", left: "49px" }}
          >
            关键字
          </Typography>
          <Typography
            variant="body1"
            sx={{
              position: "absolute",
              width: "421px",
              top: "145px",
              left: "49px",
            }}
          >
            曲线型，小量感
          </Typography>
          <Typography
            variant="body1"
            sx={{
              position: "absolute",
              width: "408px",
              top: "60px",
              left: "49px",
            }}
          >
            BM / JK / 纯欲风 / 公主萝莉风 / 甜酷偏甜 / 富家千金风 / 芭蕾风
          </Typography>
        </Box>

        <Box
          sx={{
            position: "absolute",
            width: "231px",
            height: "1080px",
            top: "204px",
            left: "1697px",
          }}
        >
          <Card
            sx={{
              width: "223px",
              height: "97px",
              position: "absolute",
              top: 0,
              left: 0,
              borderRadius: "10px 0px 0px 10px",
            }}
          >
            <CardContent>
              <Typography
                variant="h6"
                sx={{ position: "absolute", top: "38px", left: "42px" }}
              >
                风格推荐
              </Typography>
              <CardMedia
                component="img"
                sx={{
                  width: "24px",
                  height: "27px",
                  position: "absolute",
                  top: "38px",
                  left: "158px",
                }}
                image="https://c.animaapp.com/VZKg7vEK/img/mingcute-down-line.svg"
                alt="Mingcute down line"
              />
            </CardContent>
          </Card>
          <Typography
            variant="h6"
            sx={{ position: "absolute", top: "135px", left: "42px" }}
          >
            发型推荐
          </Typography>
          <Typography
            variant="h6"
            sx={{ position: "absolute", top: "232px", left: "42px" }}
          >
            妆容推荐
          </Typography>
          <Typography
            variant="h6"
            sx={{ position: "absolute", top: "329px", left: "42px" }}
          >
            穿搭推荐
          </Typography>
          <CardMedia
            component="img"
            sx={{
              width: "24px",
              height: "27px",
              position: "absolute",
              top: "135px",
              left: "158px",
            }}
            image="https://c.animaapp.com/VZKg7vEK/img/mingcute-down-line-1.svg"
            alt="Mingcute down line"
          />
          <CardMedia
            component="img"
            sx={{
              width: "24px",
              height: "27px",
              position: "absolute",
              top: "232px",
              left: "158px",
            }}
            image="https://c.animaapp.com/VZKg7vEK/img/mingcute-down-line-2.svg"
            alt="Mingcute down line"
          />
          <CardMedia
            component="img"
            sx={{
              width: "24px",
              height: "27px",
              position: "absolute",
              top: "329px",
              left: "158px",
            }}
            image="https://c.animaapp.com/VZKg7vEK/img/mingcute-down-line-3.svg"
            alt="Mingcute down line"
          />
          <CardMedia
            component="img"
            sx={{
              width: "223px",
              height: "1px",
              position: "absolute",
              top: "48px",
              left: 0,
            }}
            image="https://c.animaapp.com/VZKg7vEK/img/line-19.svg"
            alt="Line"
          />
          <CardMedia
            component="img"
            sx={{
              width: "223px",
              height: "1px",
              position: "absolute",
              top: "296px",
              left: 0,
            }}
            image="https://c.animaapp.com/VZKg7vEK/img/line-20.svg"
            alt="Line"
          />
          <CardMedia
            component="img"
            sx={{
              width: "223px",
              height: "1px",
              position: "absolute",
              top: "400px",
              left: 0,
            }}
            image="https://c.animaapp.com/VZKg7vEK/img/line-21.svg"
            alt="Line"
          />
        </Box>

        <CardMedia
          component="img"
          sx={{
            width: "163px",
            height: "153px",
            position: "absolute",
            top: 0,
            left: "4px",
          }}
          image="https://c.animaapp.com/VZKg7vEK/img/wechatimg257-removebg-1.svg"
          alt="Wechatimg"
        />
      </Box>
    </Box>
  );
};
