import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FavoritePokemon } from '../pages';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testando o component Favorite Pokémon', () => {
  it('Teste se é exibida na tela a mensagem No favorite pokemon found, caso a pessoa não tenha Pokémon favoritos;', () => {
    renderWithRouter(<FavoritePokemon />);
    const TEXT = screen.getByText(/no favorite pokémon found/i);

    expect(TEXT).toBeInTheDocument();
  });
  it('São exibidos na tela apenas os Pokémon favoritados', () => {
    renderWithRouter(<App />);

    const LINK_DETAILS = screen.getByRole('link', {
      name: /more details/i,
    });
    userEvent.click(LINK_DETAILS);

    const CHECK_BOX_FAVORITE = screen.getByRole('checkbox', {
      name: /pokémon favoritado\?/i,
    });
    expect(CHECK_BOX_FAVORITE).toBeInTheDocument();
    userEvent.click(CHECK_BOX_FAVORITE);

    const LINK_FAVORITE_POKEMON = screen.getByRole('link', {
      name: /favorite pokémon/i,
    });
    expect(LINK_FAVORITE_POKEMON).toBeInTheDocument();
    userEvent.click(LINK_FAVORITE_POKEMON);
    const FAVORITE_POKEMON = screen.getByRole('img', {
      name: /pikachu is marked as favorite/i,
    });
    expect(FAVORITE_POKEMON).toBeInTheDocument();

    // userEvent.click(CHECK_BOX_FAVORITE);
    // expect(FAVORITE_POKEMON).not.toBeInTheDocument();
  });
  it('Testando se é possível desmarcar o um Pokemon Favorito', () => {
    renderWithRouter(<App />);

    const LINK_DETAILS = screen.getByRole('link', {
      name: /more details/i,
    });
    userEvent.click(LINK_DETAILS);

    const CHECK_BOX_FAVORITE = screen.getByRole('checkbox', {
      name: /pokémon favoritado\?/i,
    });
    const IMG_ICON = screen.getByRole('img', {
      name: 'Pikachu is marked as favorite',
    });
    const SRC_ICON = '/star-icon.svg';
    expect(IMG_ICON).toBeInTheDocument();
    expect(IMG_ICON.src).toContain(SRC_ICON);
    expect(IMG_ICON).toHaveAttribute('src', SRC_ICON);

    console.log(CHECK_BOX_FAVORITE.checked);
    expect(CHECK_BOX_FAVORITE).toBeInTheDocument();
    userEvent.click(CHECK_BOX_FAVORITE);
    expect(IMG_ICON).not.toBeInTheDocument();
  });
});
