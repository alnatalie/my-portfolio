import { Box, IconButton, Stack, Tooltip } from "@mui/material";
import { GitHub, Telegram } from "@mui/icons-material";

const YandexMailIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 12L2 6v12l10-6z" fill="#FC3F1D"/>
    <path d="M22 6v12l-10-6 10-6z" fill="#FF0"/>
    <path d="M12 12L2 6v12l10-6z" fill="#FC3F1D"/>
  </svg>
);

const socials = [
  {
    name: "GitHub",
    icon: <GitHub fontSize="medium"  />,
    url: "https://github.com/alnatalie",
    color: "#333",
  },
  {
    name: "Telegram",
    icon: <Telegram fontSize="medium" />,
    url: "https://t.me/alnatalie",
    color: "#0088cc",
  },

  {
    name: 'Яндекс.Почта',
    icon: <YandexMailIcon />,
    url: 'mailto:your-login@yandex.ru',
    color: '#FF0000', 
    customIcon: true,
  },


];

export default function SocLinks() {
  return (
    <>
    <Box sx={{
            position:'relative',
            width:'fit-content',
            ml:{xs:2, md:4},
            my:4,  
        }}>

      <Stack
        direction="column"
        spacing={1}
        
      >
        {socials.map((social) => (
          <Tooltip
            key={social.name}
            title={social.name}
            placement="right"
            arrow
          >
            <IconButton
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: social.color,
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "scale(1.2)",
                  backgroundColor: `${social.color}20`,
                },
              }}
            >
              {social.icon}
            </IconButton>
          </Tooltip>
        ))}
      </Stack>
    </Box>
    </>
  );
}
