import React from 'react';
import {Box} from '@mui/material';
import { styled } from '@mui/material/styles';


const getISBN = (volumeInfo) => {
    const identifiers = volumeInfo.industryIdentifiers || [];
    const isbn = identifiers.find(id => id.type === 'ISBN_10' || id.type === 'ISBN_13');
    return isbn ? isbn.identifier : 'Not Available';
};

const StyledBox = styled(Box)({
    backgroundColor: '#f5f5f5',
    border: '1px solid #ddd', 
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', 
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    boxSizing: 'border-box', 
    height: 'auto', 
    minHeight: '263px', 
    padding: '10px', 
    margin: '20px', 
  });

const DescriptionBox = styled(Box)({
    maxHeight: '243px', 
    padding: '10px',
    marginLeft: '10px',
    overflow: 'hidden', 
    textOverflow: 'ellipsis', 
    display: '-webkit-box',
    WebkitLineClamp: 7, 
    WebkitBoxOrient: 'vertical',
    width: '100%', 
  });

const thumbnailStyle = {
    width: '175px',
    height: '263px', 
    objectFit: 'cover', 
    borderRadius: '4px', 
    marginRight: '10px' 
   };

function BookCard({book}) {

    return (
        <StyledBox>
            <Box display="flex" flexDirection="row" alignItems="start">
                <Box>
                    <img src={book.volumeInfo.imageLinks?.smallThumbnail} alt={book.volumeInfo.title} style = {thumbnailStyle}/>
                </Box>
                <DescriptionBox>
                    <h2>{book.volumeInfo.title} - {book.volumeInfo.authors?.join(', ')}</h2>
                    <p>Genres: {book.volumeInfo.categories?.join(', ')}</p>
                    <p>ISBN: {getISBN(book.volumeInfo)}</p>
                    <p style={{ margin: 0, WebkitBoxOrient: 'vertical', overflow: 'hidden', textOverflow: 'ellipsis', WebkitLineClamp: 7, display: '-webkit-box' }}>
                    {book.volumeInfo.description}
                    </p>
                </DescriptionBox>
            </Box>
        </StyledBox>
    );
}

export default BookCard;