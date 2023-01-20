import React from 'react';
import { screen } from '@testing-library/react';
import { About } from '../pages';
import renderWithRouter from '../renderWithRouter';

describe('Testando o componente About', () => {
  it('Teste se a página contém as informações sobre a Pokédex', () => {
    renderWithRouter(<About />);
    const TITLE_ABOUT = screen.getByRole('heading', {
      name: /about pokédex/i,
    });
    const TEXT_ONE_ABOUT = screen.getByText(
      /this application simulates a pokédex, a digital encyclopedia containing all pokémon/i,
    );
    const TEXT_TWO_ABOUT = screen.getByText(
      /one can filter pokémon by type, and see more details for each one of them/i,
    );
    const IMG_ABOUT = screen.getByRole('img', {
      name: /pokédex/i,
    });
    const SRC_IMG = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';

    expect(TITLE_ABOUT).toBeDefined();
    expect(TEXT_ONE_ABOUT).toBeDefined();
    expect(TEXT_TWO_ABOUT).toBeDefined();
    expect(IMG_ABOUT).toBeDefined();
    expect(IMG_ABOUT.src).toContain(SRC_IMG);
    expect(IMG_ABOUT).toHaveAttribute('src', SRC_IMG);
  });
});
