import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import StarIcon from "@mui/icons-material/Star";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const FrontPage = () => {
  return (
    <Box display="flex" justifyContent="center" width="100%" bgcolor="white">
      <Box position="relative" width="1920px" height="1080px" overflow="hidden">
        <Box
          position="absolute"
          width="4105px"
          height="1598px"
          top={0}
          left="-2071px"
        >
          <Grid container spacing={2} position="absolute" top="332px" left={0}>
            {[
              { text: "三庭分析", left: 2374 },
              { text: "鼻型", left: 2716 },
              { text: "唇型", left: 3005 },
              { text: "头肩比", left: 3294 },
              { text: "脸型", left: 3613 },
            ].map((item, index) => (
              <Grid
                item
                key={index}
                sx={{
                  position: "absolute",
                  animation: `slide-cycle 10s linear infinite`,
                  left: item.left,
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    width: 173,
                    height: 46,
                    borderRadius: 46,
                    background:
                      "conic-gradient(from 180deg at 50% 50%, rgb(156,254,218.72) 0deg, rgb(156,254,183.44) 360deg)",
                    color: "black",
                    textTransform: "none",
                  }}
                >
                  {item.text}
                </Button>
              </Grid>
            ))}
          </Grid>

          <style>
          {`
          @keyframes slide-cycle {
            0% {
              transform: translateX(100vw);
            }
            100% {
              transform: translateX(-90vw);
            }
          }
          `}
          </style>


          <img
            style={{
              position: "absolute",
              width: "1920px",
              height: "664px",
              top: "72px",
              left: "2071px",
            }}
            alt="Vector"
            // src="/img/vector-2.svg"
            src="/img/vector-2.svg"
          />

          <img
            style={{
              position: "absolute",
              width: "1920px",
              height: "962px",
              top: "118px",
              left: "2071px",
            }}
            alt="Vector"
            // src="/img/vector-3.svg"
            src="/img/vector-3.svg"
          />

          <Box
            position="absolute"
            width="857px"
            height="1293px"
            top="305px"
            left="2602px"
            borderRadius="1000px"
            bgcolor="linear-gradient(180deg, rgb(223.07,223.07,223.07) 0%, rgb(255,255,255) 100%)"
          />

          <Box
            position="absolute"
            width="944px"
            height="1328px"
            top="260px"
            left="2558px"
            borderRadius="1000px"
            border={2}
            borderColor="black"
          />

          <Box
            position="absolute"
            width="547px"
            height="802px"
            top="378px"
            left="2763px"
            bgcolor="white"
            borderRadius="263px"
            sx={{ filter: "blur(100px)" }}
          />

          <img
            style={{
              position: "absolute",
              width: "469px",
              height: "703px",
              top: "377px",
              left: "2794px",
              objectFit: "cover",
            }}
            alt="Image"
            src="/img/image-4.png"
          />

          <Box
            position="absolute"
            width="265px"
            height="574px"
            top="452px"
            left="2899px"
          >
            <Box position="relative" height="574px" borderRadius="31px">
              <img
                style={{
                  position: "absolute",
                  width: "240px",
                  height: "552px",
                  top: "3.5px",
                  left: "13px",
                }}
                alt="Rectangle"
                src="/img/rectangle-106.svg"
              />

              <Box
                position="absolute"
                width="78px"
                height="21px"
                top="27px"
                left="93px"
                bgcolor="black"
                borderRadius="21px"
              />

              <Box
                position="absolute"
                width="265px"
                height="574px"
                top={0}
                left={0}
                borderRadius="31px"
                border={8}
                borderColor="white"
              />
            </Box>
          </Box>

          <Box
            position="absolute"
            width="13px"
            height="3px"
            top="857px"
            left="3120px"
            bgcolor="white"
            borderRadius="6.5px/6px"
            sx={{ filter: "blur(5px)" }}
          />

          <Box
            position="absolute"
            width="13px"
            height="3px"
            top="645px"
            left="3117px"
            bgcolor="white"
            borderRadius="6.5px/6px"
            sx={{ filter: "blur(5px)" }}
          />

          <Box
            position="absolute"
            width="13px"
            height="3px"
            top="672px"
            left="2954px"
            bgcolor="white"
            borderRadius="6.5px/6px"
            sx={{ filter: "blur(5px)" }}
          />

          <Box
            position="absolute"
            width="13px"
            height="3px"
            top="851px"
            left="2977px"
            bgcolor="white"
            borderRadius="6.5px/6px"
            sx={{ filter: "blur(5px)" }}
          />

          <Box
            position="absolute"
            width="958px"
            height="58px"
            top="134px"
            left="2554px"
          >
            <Typography
              variant="h1"
              sx={{
                textShadow: "0px 0px 6.9px #00000033",
                fontFamily: "Inter, Helvetica",
                fontWeight: "normal",
                color: "black",
                fontSize: "3rem",
              }}
            >
              AI驱动形象风格分析
            </Typography>

            <Typography
              variant="h1"
              sx={{
                textShadow: "0px 0px 2px #00000033",
                fontFamily: "Inter, Helvetica",
                fontWeight: "normal",
                color: "black",
                fontSize: "3rem",
                position: "absolute",
                top: 0,
                left: "474px",
              }}
            >
              <span>精准定制您的</span>
              <span style={{ fontWeight: "bold" }}>独特</span>
              <span>风格</span>
            </Typography>
          </Box>

          <Box
            position="absolute"
            width="467px"
            height="104px"
            top="811px"
            left="3126px"
          >
            <Box position="relative" width="472px" height="104px" left="-5px">
              <img
                style={{
                  width: "276px",
                  height: "11px",
                  top: "47px",
                  position: "absolute",
                  left: 0,
                }}
                alt="Line"
                src="/img/line-6.svg"
              />

              <Paper
                elevation={3}
                sx={{
                  width: "197px",
                  height: "104px",
                  top: 0,
                  left: "275px",
                  position: "absolute",
                  borderRadius: "2xl",
                }}
              />
            </Box>
          </Box>

          <Box
            position="absolute"
            width="446px"
            height="104px"
            top="560px"
            left="3123px"
          >
            <Box
              position="absolute"
              width="278px"
              height="45px"
              top="51px"
              left="-5px"
            >
              <img
                style={{
                  width: "161px",
                  height: "0.5px",
                  top: 0,
                  left: "117px",
                  position: "absolute",
                }}
                alt="Line"
                src="/img/line-6-1.svg"
              />

              <img
                style={{
                  width: "119px",
                  height: "45px",
                  top: 0,
                  position: "absolute",
                  left: 0,
                }}
                alt="Line"
                src="/img/line-7.svg"
              />
            </Box>

            <Paper
              elevation={3}
              sx={{
                width: "173px",
                height: "104px",
                top: 10,
                left: "283px",
                position: "absolute",
                borderRadius: "2xl",
              }}
            />
          </Box>

          <Box
            position="absolute"
            width="499px"
            height="104px"
            top="592px"
            left="2461px"
            sx={{ transform: "rotate(180deg)" }}
          >
            <Box position="relative" width="504px" height="104px" left="-5px">
              <img
                style={{
                  width: "216px",
                  height: "0.5px",
                  top: "51px",
                  left: "72px",
                  position: "absolute",
                  transform: "rotate(180deg)",
                }}
                alt="Line"
                src="/img/line-6-2.svg"
              />

              <img
                style={{
                  width: "74px",
                  height: "10px",
                  top: "13px",
                  left: 0,
                  position: "absolute",
                  transform: "rotate(180deg)",
                }}
                alt="Line"
                src="/img/line-7-1.svg"
              />

              <Paper
                elevation={3}
                sx={{
                  width: "216px",
                  height: "104px",
                  top: -10,
                  left: "272px",
                  position: "absolute",
                  borderRadius: "2xl",
                }}
              />
            </Box>
          </Box>

          <Box
            position="absolute"
            width="523px"
            height="147px"
            top="857px"
            left="2461px"
            sx={{ transform: "rotate(180deg)" }}
          >
            <Box
              position="absolute"
              width="311px"
              height="101px"
              top="51px"
              left="-5px"
            >
              <img
                style={{
                  width: "105px",
                  height: "101px",
                  top: 0,
                  left: 0,
                  position: "absolute",
                  transform: "rotate(180deg)",
                }}
                alt="Line"
                src="/img/line-6-3.svg"
              />

              <img
                style={{
                  width: "207px",
                  height: "0.5px",
                  top: 0,
                  left: "104px",
                  position: "absolute",
                  transform: "rotate(180deg)",
                }}
                alt="Line"
                src="/img/line-7-2.svg"
              />
            </Box>

            <Paper
              elevation={3}
              sx={{
                width: "217px",
                height: "104px",
                top: 0,
                left: "306px",
                position: "absolute",
                borderRadius: "2xl",
              }}
            />
          </Box>

          <Typography
            variant="h6"
            sx={{
              position: "absolute",
              top: "847px",
              left: "3482px",
              fontFamily: "Inter, Helvetica",
              fontWeight: "normal",
              color: "black",
              fontSize: "2rem",
            }}
          >
            鹅蛋脸
          </Typography>

          <Typography
            variant="h6"
            sx={{
              position: "absolute",
              top: "596px",
              left: "3482px",
              fontFamily: "Inter, Helvetica",
              fontWeight: "normal",
              color: "black",
              fontSize: "2rem",
            }}
          >
            剑眉
          </Typography>

          <Typography
            variant="h6"
            sx={{
              position: "absolute",
              top: "628px",
              left: "2551px",
              fontFamily: "Inter, Helvetica",
              fontWeight: "normal",
              color: "black",
              fontSize: "2rem",
            }}
          >
            标准眼
          </Typography>

          <Typography
            variant="h6"
            sx={{
              position: "absolute",
              top: "936px",
              left: "2554px",
              fontFamily: "Inter, Helvetica",
              fontWeight: "normal",
              color: "black",
              fontSize: "2rem",
            }}
          >
            微笑唇
          </Typography>

          <StarIcon
            sx={{
              position: "absolute",
              top: "631px",
              left: "2501px",
              color: "black",
              fontSize: "1.75rem",
            }}
          />

          <StarIcon
            sx={{
              position: "absolute",
              top: "938px",
              left: "2501px",
              color: "black",
              fontSize: "1.75rem",
            }}
          />

          <StarIcon
            sx={{
              position: "absolute",
              top: "848px",
              left: "3429px",
              color: "black",
              fontSize: "1.75rem",
            }}
          />

          <StarIcon
            sx={{
              position: "absolute",
              top: "598px",
              left: "3429px",
              color: "black",
              fontSize: "1.75rem",
            }}
          />
          <Link className="component-5" to="/agreement">
          <Button
            variant="contained"
            sx={{
              position: "absolute",
              width: "301px",
              height: "123px",
              top: "862px",
              left: "3624px",
              borderRadius: "75px",
              background:
                "conic-gradient(from 180deg at 50% 50%, rgb(156,254,218.72) 0deg, rgb(156,254,183.44) 360deg)",
              color: "black",
              textTransform: "none",
              fontSize: "32px",
              fontWeight: "bold",
            }}
            endIcon={<ArrowForwardIcon />}
          >
            开始
          </Button>
          </Link>
          <img
            style={{
              position: "absolute",
              width: "81px",
              height: "100px",
              top: "380px",
              left: "3363px",
            }}
            alt="Vector"
            src="/img/vector-1-1.svg"
          />

          <img
            style={{
              position: "absolute",
              width: "81px",
              height: "90px",
              top: "390px",
              left: "3356px",
            }}
            alt="Star"
            // src="https://c.animaapp.com/hheWbrf5/img/star-3.svg"
            src="/img/star-7.svg"
          />

          <img
            style={{
              position: "absolute",
              width: "163px",
              height: "153px",
              top: 0,
              left: "2087px",
            }}
            alt="Wechatimg"
            src="/img/wechatimg257-removebg-1-2.svg"
          />
        </Box>

        <img
          style={{
            position: "absolute",
            width: "137px",
            height: "19px",
            top: "-639px",
            left: "13740px",
          }}
          alt="Seasons COLOR"
          src="/img/seasons-color.svg"
        />
      </Box>
    </Box>
  );
};
