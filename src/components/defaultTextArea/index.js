import React, { useState } from 'react';

import Typing from 'react-typing-animation';

import {Link} from 'react-router-dom';

import {
    Container,
    Title,
    // Sub, Span, 
    // Paragraph, 
    // Button, 
    // OtherTitles,
    // Subtitle
} from './styles';

export default function DefaultText({title, subtitle, children}) {
    
    const [actived, setActived] = useState(false);
    
    return (
        <Container>
            <Typing
                cursorClassName="custom"
                cursor={<span>_</span>}
                speed={80}
                onFinishedTyping={() => setActived(true)}
            >
                <Title>
                {title}
                </Title>
            </Typing>
                
        </Container>
    );  
}