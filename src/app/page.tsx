"use client";
import {
  Email,
  GitHub,
  KeyboardArrowDown,
  Telegram,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogContent,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Navigation from "../components/Navigation";
import { useCallback, useState } from "react";
import Footer from "../components/Footer";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <Navigation scrollToSection={scrollToSection} />

      {/*Главная */}
      <Box
        id="home"
        sx={{
          minHeight: "100vh",
          pt: "64px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background:
            "radial-gradient(circle at center, rgb(39, 39, 57) 0%, rgb(9, 3, 21) 100%)",
          color: "white",
          px: 2,
          textAlign: "center",
          position: "relative",
          width: "100vw",
          marginLeft: "calc(-50vw + 50%)",
          marginTop: "-64px",
          paddingTop: "64px",
        }}
      >
        {/*Ссылки */}
        <Stack
          direction="column"
          spacing={2}
          sx={{
            position: "absolute",
            left: { xs: "20px", md: "40px" },
            top: "50%",
            transform: "translateY(-50%)",
            display: { xs: "none", md: "flex" },
          }}
        >
          <IconButton
            href="https://github.com/alnatalie"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "grey.400",
              "&:hover": { color: "white" },
              transition: "color 0.3s ease",
            }}
          >
            <GitHub fontSize="large" />
          </IconButton>
          <IconButton
            href="https://t.me/alnatalie"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "grey.400",
              "&:hover": { color: "#0088cc" },
              transition: "color 0.3s ease",
            }}
          >
            <Telegram fontSize="large" />
          </IconButton>
          <IconButton
            href="mailto:natashka.0606@yandex.ru"
            sx={{
              color: "grey.400",
              "&:hover": { color: "#FF0000" },
              transition: "color 0.3s ease",
            }}
          >
            <Email fontSize="large" />
          </IconButton>
        </Stack>

        {/*Контент обо мне */}
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
            >
              Привет, меня зовут Наталья
            </Typography>
            <Typography variant="h6">
              Я начинающий Frontend-разработчик с опытом работы в React,
              Next.js. Сейчас активно ищу работу или стажировку.
            </Typography>
          </Box>

          <Box
            sx={{
              flex: 1,
              width: { xs: 300, md: 400 },
              height: { xs: 300, md: 500 },
              borderRadius: "50%",
              overflow: "hidden",
              border: "2px solid white",
              boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)",
            }}
          >
            <Image
              src="/images/avatar.jpeg"
              alt="Аватар"
              width={400}
              height={400}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </Box>
        </Container>

        {/*Стрелочка :з */}
        <IconButton
          onClick={() => scrollToSection("about")}
          sx={{
            position: "absolute",
            bottom: "80px",
            left: "50%",
            transform: "translateX(-50%)",
            color: "white",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            border: "1px solid white",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              transform: "translateX(-50%) scale(1.1)",
            },
            transition: "all 0.3s ease",
            width: 50,
            height: 50,
          }}
        >
          <KeyboardArrowDown fontSize="large" />
        </IconButton>
      </Box>

      {/*Обо мне */}
      <Box
        id="about"
        sx={{
          minHeight: "100vh",
          py: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            align="center"
          >
            Обо мне
          </Typography>
          <Paper
            elevation={3}
            sx={{
              p: 4,
              mb: 4,
              borderRadius: 2,
              backgroundColor: "background.paper",
            }}
          >
            <Typography>
              Мне 28 лет, из города Новосибирск. С марта 2024 года начала
              проходить курс по Frontent разработке. Защитила диплом в апреле
              2025 года и теперь активно ищу интересные проекты и команду, где
              смогу расти как разработчик. Если вам нужен увлечённый фронтендер
              – давайте работать вместе! Опыт работы:
            </Typography>
            <Box
              component="ul"
              sx={{ pl: 4, mb: 3 }}
            >
              <Typography component="li">Next.js, React, Angular</Typography>
              <Typography component="li">Node.js</Typography>
              <Typography component="li">TypeScript</Typography>
              <Typography component="li">
                CSS (Tailwind, Material UI)
              </Typography>
              <Typography component="li">Работа с REMULT REST API</Typography>
            </Box>
            <Typography>
              {" "}
              Я стараюсь каждый день узнавать что-то новое.
            </Typography>
          </Paper>

          <Box sx={{ textAlign: "center", mt: 4 }}>
            <Typography
              variant="h6"
              gutterBottom
            >
              Диплом
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 2,
                flexWrap: "wrap",
              }}
            >
              {["/images/diploma.JPG", "/images/diploma2.JPG"].map(
                (img, index) => (
                  <Box
                    key={index}
                    onClick={() => handleImageClick(img)}
                    sx={{
                      cursor: "pointer",
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.02)",
                      },
                    }}
                  >
                    <Image
                      src={img}
                      alt="Диплом"
                      width={400}
                      height={200}
                      style={{
                        borderRadius: "8px",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                        maxWidth: "100%",
                        height: "auto",
                      }}
                    />
                  </Box>
                )
              )}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Портфолио*/}
      <Box
        id="portfolio"
        sx={{
          minHeight: "100vh",
          py: 8,
          backgroundColor: "#f5f5f5",
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            align="center"
          >
            Мои проекты
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 3,
            }}
          >
            <Paper sx={{ p: 3, width: 300 }}>
              <Typography variant="h6">TODO List</Typography>
              <Typography
                variant="body2"
                sx={{ my: 2 }}
              >
                Приложение для управления задачами на React
              </Typography>
              <Button
                variant="outlined"
                fullWidth
              >
                Посмотреть
              </Button>
            </Paper>

            <Paper sx={{ p: 3, width: 300 }}>
              <Typography variant="h6">Jewelry Store</Typography>
              <Typography
                variant="body2"
                sx={{ my: 2 }}
              >
                Ювелирный онлайн магазин на React
              </Typography>
              <Button
                variant="outlined"
                fullWidth
              >
                Посмотреть
              </Button>
            </Paper>
          </Box>
        </Container>
      </Box>

       {/* Модальное окно для увеличенного изображения */}
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
      >
        <DialogContent sx={{ p: 0, display: "flex", justifyContent: "center" }}>
          {selectedImage && (
            <Image
              src={selectedImage}
              alt="Увеличенное изображение диплома"
              width={800}
              height={400}
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "90vh",
                objectFit: "contain",
              }}
            />
          )}
        </DialogContent>
      </Dialog>

      <Footer/>
    </>
  );
}
