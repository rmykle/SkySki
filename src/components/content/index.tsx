import React, { PropsWithChildren } from 'react';

interface ContentProps {}

const Content = ({ children }: PropsWithChildren<ContentProps>) => {
    return <main>{children}</main>;
};

export default Content;
