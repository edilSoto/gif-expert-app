import { render, screen } from "@testing-library/react"
import { GifGridItem } from "../../src/components"

describe('Tests in the GifGridItem component', () => {

    const title = 'Dragon Ball';
    const url = 'https://media1.giphy.com/media/977YesTjNfQC7vQiph/giphy.gif?cid=0e87d200z5alyfsv7135ihz623f3wli93uiyn1umo1han6pm&rid=giphy.gif&ct=g'

    test('Must match snapshot', () => {

        const { container } = render(<GifGridItem title={title} url={url} />)
        expect(container).toMatchSnapshot();
    });

    test('Must show the img element with the url and alt supplied', () => {

        render(<GifGridItem title={title} url={url} />);
        const { src, alt } = screen.getByRole('img');
        expect(src).toMatch(url);
        expect(alt).toMatch(title);
    })

    test('Must show the title of the component', () => {

        render(<GifGridItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();
    });
});