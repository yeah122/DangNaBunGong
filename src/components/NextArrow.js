import styled from "styled-components";

function NextArrow() {
    return(
        <NextArrowButton>
            <NextArrowIcon xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </NextArrowIcon>
        </NextArrowButton>
    )
}

const NextArrowButton = styled.div`
width: 1.5rem;
height: 1.5rem;
border: 1px solid rgb(189,189,189);
z-index:99;`

const NextArrowIcon = styled.svg`
width: 1rem;
height: 1rem;
margin: auto;`

export default NextArrow;