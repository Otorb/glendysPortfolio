import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {lightTheme} from './Themes';
import { Design, Develope} from './AllSvgs';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'

const Box = styled.div`

width: 100vw;
height:100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;


`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 30vw;
height: 60vh;
z-index:3;
line-height: 1.5;
cursor: pointer;

font-family: 'Ubuntu Mono',monospace;
display: flex;
flex-direction: column;
justify-content: space-between;

&:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
}
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);

${Main}:hover &{
    &>*{
        fill:${props => props.theme.body};
    }
}

&>*:first-child{
margin-right: 1rem;
}
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;


${Main}:hover &{
   
        color:${props => props.theme.body};
    
}

strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
}
ul,p{
    margin-left: 2rem;
}
`

const MySkillsPage = () => {
    return (
        <ThemeProvider theme={lightTheme}>
<Box>

<LogoComponent theme='light'/>
<SocialIcons theme='light'/>
<PowerButton />
<ParticleComponent theme='light' />
            <Main>
<Title>
    <Design width={40} height={40} /> Diseñadora
</Title>
<Description>
Me encantan los diseños y me apaciona la creación.
</Description>
<Description>
<strong>Diseños de:</strong>
<ul>
<li>
        Folletos
    </li>
    <li>
        Etiquetas
    </li>
    <li>
        Stikers
    </li>
    <li>
        Logos
    </li>
    <li>
        Libretas
    </li>
    <li>
        Cuadernos
    </li>
    <li>
        Retoque de fotos
    </li>
</ul>
</Description>

            </Main>
            <Main>
<Title>
    <Develope width={40} height={40} /> Fotógrafa
</Title>
<Description>
Fotografa integral que  se desempeña en varios ambitos.
</Description>
<Description>
<strong>Fotografia de:</strong>
<p>
15 Años, Bodas, Cumpleaños, Modelo, Aire libre, etc.
</p>
</Description>
<Description>
<strong>además</strong>
<p>
Retoque de Fotos, edición, etc.
</p>
</Description>

            </Main>

            <BigTitle text="Habilidades" top="80%" right="10%" />

        </Box>
        <script src="https://cdn.lordicon.com/qjzruarw.js"></script>

        </ThemeProvider>
        
    )
}

export default MySkillsPage
