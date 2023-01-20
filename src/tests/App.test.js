import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('', () => {
  it('Teste se o topo da aplicação contém um conjunto fixo de links de navegação', () => {
    renderWithRouter(<App />);
    const LINK_HOME = screen.getByRole('link', {
      name: /home/i,
    });
    const LINK_ABOUT = screen.getByRole('link', {
      name: /about/i,
    });
    const LINK_FAVORITE_POKEMON = screen.getByRole('link', {
      name: /favorite pokémon/i,
    });
    expect(LINK_HOME).toBeInTheDocument();
    expect(LINK_ABOUT).toBeInTheDocument();
    expect(LINK_FAVORITE_POKEMON).toBeInTheDocument();
  });

  it('Teste se a aplicação é redirecionada para a página inicial, na URL / ao clicar no link Home da barra de navegação', () => {
    renderWithRouter(<App />);
    const LINK_HOME = screen.getByRole('link', {
      name: /home/i,
    });
    userEvent.click(LINK_HOME);
    const NAME_PIKACHU = screen.getByText(/pikachu/i);
    expect(NAME_PIKACHU).toBeInTheDocument();
  });
  it('Teste se a aplicação é redirecionada para a página de About, na URL /about, ao clicar no link About da barra de navegação', () => {
    renderWithRouter(<App />);
    const LINK_ABOUT = screen.getByRole('link', {
      name: /about/i,
    });
    userEvent.click(LINK_ABOUT);
    const TITLE_ABOUT = screen.getByRole('heading', {
      name: /about pokédex/i,
    });

    expect(TITLE_ABOUT).toBeInTheDocument();
  });
  it('Teste se a aplicação é redirecionada para a página de Pokémon Favoritados, na URL /favorites, ao clicar no link Favorite Pokémon da barra de navegação', () => {
    renderWithRouter(<App />);
    const LINK_FAVORITE_POKEMON = screen.getByRole('link', {
      name: /favorite pokémon/i,
    });
    userEvent.click(LINK_FAVORITE_POKEMON);
    const TITLE_FAVORITE_POKEMON = screen.getByRole('heading', {
      name: /favorite pokémon/i,
    });

    expect(TITLE_FAVORITE_POKEMON).toBeInTheDocument();
  });
  it('Teste se a aplicação é redirecionada para a página Not Found ao entrar em uma URL desconhecida.', () => {
    const { history } = renderWithRouter(<App />);
    act(() => {
      history.push('/qualquer-pagina');
    });
    const TITLE_NOT_FOUND = screen.getByRole('heading', {
      name: /page requested not found/i,
    });
    const IMG_NOT_FOUND = screen.getByRole('img', {
      name: /pikachu crying because the page requested was not found/i,
    });
    expect(TITLE_NOT_FOUND).toBeInTheDocument();
    expect(IMG_NOT_FOUND).toBeInTheDocument();
  });
});
