import React from 'react';
import { screen } from '@testing-library/react';
import { NotFound } from '../pages';
import renderWithRouter from '../renderWithRouter';

describe('Testando o component NotFound', () => {
  it('Teste se a página contém um heading h2 com o texto Page requested not found', () => {
    renderWithRouter(<NotFound />);

    const TITLE_NOT_FOUND = screen.getByRole('heading', {
      name: /page requested not found/i,
      level: 2,
    });
    expect(TITLE_NOT_FOUND).toBeInTheDocument();
  });
  it('Teste se a página mostra a imagem', () => {
    renderWithRouter(<NotFound />);
    const IMG_NOT_FOUND = screen.getByRole('img', {
      name: /pikachu crying because the page requested was not found/i,
    });
    const SRC_IMG_NOT_FOUND = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';

    expect(IMG_NOT_FOUND).toBeDefined();
    expect(IMG_NOT_FOUND.src).toContain(SRC_IMG_NOT_FOUND);
    expect(IMG_NOT_FOUND).toHaveAttribute('src', SRC_IMG_NOT_FOUND);
  });
});
