'use client'

import { useState, useEffect } from 'react';

import data from '@emoji-mart/data'
import { Picker } from "emoji-mart";
import { Button } from '@/components/ui/button';

const EmojiComponent = () => {

    const [isPickerVisible, setIsPickerVisible] = useState(false);
    const [text, setText] = useState("");

    const addEmoji = (emoji: { native: string; }) => {
        const newText = text + emoji.native;
        setText(newText);
        setIsPickerVisible(false); // Hide the picker after selecting an emoji
    };

    return (
        <>
            <Button className="absolute bottom-0 right-0" onClick={() => setIsPickerVisible(!isPickerVisible)}>
                Emoji
            </Button>
        { 
            isPickerVisible && (
        <div
            className="absolute bottom-full mb-2 right-0 translate-x-full" // Adjust the position based on your requirements
        >
          <Picker data={data} />
        </div>
    )}
        </>
    );
}

export default EmojiComponent;