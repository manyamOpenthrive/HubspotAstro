import { useSanityClient, groq, createImageBuilder } from 'astro-sanity';


export async function getCard(){
    const query = groq `*[_type == 'Card'] | order(_createdAt desc){
        title,
        description,
        "currentSlug" : slug.current,
        logo,
        features[],    
    }`
    const fetchCard = await useSanityClient().fetch(query);
    return fetchCard;
}

export const imageBuilder = createImageBuilder(useSanityClient());

export function urlForImage(source){
    return imageBuilder.image(source);
}

export async function getCustomer(){
    const query = groq `*[_type == 'Customers'] | order(_createdAt desc){
        title,
        image
    }`
    const customersImage = await useSanityClient().fetch(query);
    return customersImage
}

export async function getSolution(){
    const query = groq `*[_type == 'Solutions'] | order(_createdAt desc){
        title,
        image,
        description
    }`
    const solution = await useSanityClient().fetch(query);
    return solution
}