import{ render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import ToolAPIContainer from './ToolAPIContainer'


describe('Show fake post man', () => {
    it('shoudl display json objects per fetch call', async ()=> {
        render(<ToolAPIContainer/>);
        screen.getByText('GET')


    });

});