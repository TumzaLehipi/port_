import React from 'react';
import {
    Container,
    Title,
    Sub, Paragraph, TextContainer, Heading,About } from './styles';

export default function Text({home, title, subtitle, children}) {
    return (
        <React.Fragment>
            {home ? 
            (<Container>
                <Title> {title}</Title>  
                <Sub> {subtitle} </Sub> 
            </Container>)
            :
            (<Paragraph>  
                <About>
                <Heading>{title}</Heading>
                    <TextContainer>  
                        {children}
                    </TextContainer>
                </About>
            </Paragraph>)};

        </React.Fragment>
    );
}