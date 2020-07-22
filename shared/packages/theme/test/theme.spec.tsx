import React from 'react';
import renderer from 'react-test-renderer';
import { renderHook, cleanup } from '@testing-library/react-hooks';
import { useTheme, ThemeProvider } from '../src/theme';

afterEach(cleanup);

describe('theme', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(
                <ThemeProvider>
                    <div>test</div>
                </ThemeProvider>,
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('useTheme return correct context', () => {
        const { result } = renderHook(() => useTheme());
        expect(result.current).toMatchObject({
            red: '#ff0000',
            green: '#00ff00',
            blue: '#0000ff',
        });
    });
});
