import { AppBar, Button, Toolbar } from "@mui/material"

interface NavigationProps{
    scrollToSection:(sectionId:string)=>void;
}

export default function Navigation({scrollToSection} : NavigationProps) {
    return(
        <AppBar position="fixed" sx={{
            backgroundColor: 'rgba(6, 3, 35, 0.33)',
            backdropFilter:'blur(10px)',
            boxShadow:'none',
            height:64,
        }}>
            <Toolbar sx={{ justifyContent:'center', gap:2}}>
                <Button 
                color="inherit"
                onClick={()=> scrollToSection('home')}
                sx={{ textTransform:'none', 
                fontSize:'1rem',
                mr:2}}>
                    Главная
                </Button>

                <Button 
                color="inherit"
                onClick={()=> scrollToSection('about')}
                sx={{ textTransform:'none', fontSize:'1rem'}}>
                    Обо мне
                </Button>
                <Button 
                
                color="inherit"
                onClick={()=> scrollToSection('portfolio')}
                sx={{ textTransform:'none', fontSize:'1rem'}}>
                    Портфолио
                </Button>
            </Toolbar>
        </AppBar>
    )
}