import { useState } from "react";
import { AddCategory, GifGrid } from './components/';

const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Dragon ball']);

    const onAddCategory = (value) => {

        if (categories.includes(value)) return;
        setCategories([value, ...categories])
    }

    return (
        <>
            <h1>Gif Expert App</h1>
            <AddCategory onNewCategory={(value) => onAddCategory(value)} />
                
                {
                    categories.map((category) => (
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    ))
                }
        </>
    )
}

export default GifExpertApp;

// API key: FrY4lxSQNx8eNGBRnqpwIHd4dI7TMYZr