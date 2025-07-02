

import { Email, GitHub, Telegram } from "@mui/icons-material";
import { Box, Container, Stack, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "rgba(6, 3, 35, 0.8)",
        backdropFilter: "blur(10px)",
        py: 4,
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        color: "white",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Typography variant="h6">Контакты</Typography>
            <Typography variant="body2">
              Email: natashka.0606@yandex.ru
            </Typography>
            <Typography
              variant="body2"
              sx={{ mt: 1 }}
            >
              Телеграм: @alnatalie
            </Typography>
          </Box>

          <Box>
            <Typography
              variant="h6"
              gutterBottom
              align="center"
            >
              Социальные сети
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <a
                href="https://github.com/alnatalie"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHub
                  fontSize="large"
                  sx={{ color: "white", "&:hover": { color: "#aaa" } }}
                />
              </a>
              <a
                href="https://t.me/alnatalie"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Telegram
                  fontSize="large"
                  sx={{ color: "white", "&:hover": { color: "#0088cc" } }}
                />
              </a>
              <a href="mailto:natashka.0606@yandex.ru">
                <Email fontSize="large" sx={{ color: 'white', '&:hover': { color: '#FF0000' } }} />
              </a>
            </Stack>
          </Box>
          <Box>
            <Typography variant="body2" align="center">
              © {new Date().getFullYear()} Наталья Фронтенд-разработчик
            </Typography>
            <Typography variant="body2" align="center" sx={{ mt: 1 }}>
              Сайт создан с использованием Next.js и Material-UI
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>

    
  );
};

export default Footer;
