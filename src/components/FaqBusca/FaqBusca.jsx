import React, { useState } from 'react';
import './FaqBusca.css'
import styled from 'styled-components';

const SearchInput = styled.input.attrs({
  type: "text",
  placeholder: "Pesquisar..."
})`
  width: 100%;
  padding: 11px;
  margin-right: 0.8rem;
  border: 1px solid #faa11b76;

  &:focus {
    outline: none;
    border-color: #faa21b;
    box-shadow: 0 0 0 2px rgba(250, 162, 27, 0.3);
  }
`;

const SearchButton = styled.button`
  background-color: #faa21b;
  color: #fff;
  border: none;
  padding: 12px;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: #ffbf33;
  }
`;

const FaqBusca = () => {

  const Buscar = () => {
 //inserir a logica 
  };

  return (
    <div className='container mt-3'>
    <div className="mb-3">
      <form onSubmit={Buscar} className="search-container">
        <SearchInput type="text" className="search-input" placeholder="Pesquisar..."
        />
        <SearchButton type="submit" className="search-button"><svg className="search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M21.707 20.293l-5.616-5.616c.975-1.291 1.536-2.842 1.536-4.476 0-4.962-4.038-9-9-9s-9 4.038-9 9 4.038 9 9 9c1.634 0 3.185-.561 4.476-1.536l5.616 5.616c.293.293.768.293 1.061 0 .293-.293.293-.768 0-1.061zM9 16.25c-3.452 0-6.25-2.798-6.25-6.25s2.798-6.25 6.25-6.25 6.25 2.798 6.25 6.25-2.798 6.25-6.25 6.25z" />
        </svg></SearchButton>
      </form>
    </div>
    </div>
  );
};

export default FaqBusca;