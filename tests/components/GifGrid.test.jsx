import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";

describe('Tests in the GifGrid component', () => {
    
const category = 'Dragon ball';

    test('Must initially show the "Loading..." header', () => {

        render(<GifGrid category={category} />);
        expect(screen.getByText('Loading...'));
        expect(screen.getByText(category));
    })
})