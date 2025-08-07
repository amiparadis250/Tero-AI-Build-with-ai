import React from 'react';
import { Flex, Input } from 'antd';

const { TextArea } = Input;

const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  console.log('Change:', e.target.value);
};

const TextInput: React.FC = (onChange:any) => (
  

    <TextArea
    className='rounded-2xl'
      showCount
      maxLength={100}
      onChange={onChange}
      placeholder="Generate a video to learn step-by-step techniques for storing fresh tomatoes and reducing post-harvest losses."
      style={{ height: 120, resize: 'none' }}
    />
  
);

export default TextInput;