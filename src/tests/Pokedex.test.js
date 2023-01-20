import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Testando o componente Pokedex', () => {
  it('Teste se a página contém um heading h2 com o texto Encountered Pokémon', () => {
    renderWithRouter(<App />);
    const TITLE = screen.getByRole('heading', {
      name: /encountered pokémon/i,
      level: 2,
    });
    expect(TITLE).toBeInTheDocument();
  });
  it('Teste se é exibido o próximo Pokémon da lista quando o botão Próximo Pokémon é clicado', () => {
    renderWithRouter(<App />);

    const BTN_NEXT = screen.getByRole('button', {
      name: /próximo pokémon/i,
    });

    userEvent.click(BTN_NEXT);
    const NEXT_POKEMON = screen.getByText(/charmander/i);
    expect(NEXT_POKEMON).toBeInTheDocument();

    userEvent.click(BTN_NEXT);
    const NEXT_POKEMON2 = screen.getByText(/caterpie/i);
    expect(NEXT_POKEMON2).toBeInTheDocument();

    userEvent.click(BTN_NEXT);
    const NEXT_POKEMON3 = screen.getByText(/ekans/i);
    expect(NEXT_POKEMON3).toBeInTheDocument();

    userEvent.click(BTN_NEXT);
    const NEXT_POKEMON4 = screen.getByText(/alakazam/i);
    expect(NEXT_POKEMON4).toBeInTheDocument();

    userEvent.click(BTN_NEXT);
    const NEXT_POKEMON5 = screen.getByText(/mew/i);
    expect(NEXT_POKEMON5).toBeInTheDocument();

    userEvent.click(BTN_NEXT);
    const NEXT_POKEMON6 = screen.getByText(/rapidash/i);
    expect(NEXT_POKEMON6).toBeInTheDocument();

    userEvent.click(BTN_NEXT);
    const NEXT_POKEMON7 = screen.getByText(/snorlax/i);
    expect(NEXT_POKEMON7).toBeInTheDocument();

    userEvent.click(BTN_NEXT);
    const NEXT_POKEMON8 = screen.getByText(/dragonair/i);
    expect(NEXT_POKEMON8).toBeInTheDocument();

    userEvent.click(BTN_NEXT);
    const FIRST_POKEMON = screen.getByText(/pikachu/i);
    expect(FIRST_POKEMON).toBeInTheDocument();
  });

  it('Testando se é mostrado apenas um Pokémon por vez', () => {
    renderWithRouter(<App />);
    const PIKACHU = screen.getByText(/pikachu/i);
    expect(PIKACHU).toBeInTheDocument();
  });

  it('Testando se a Pokédex tem os botões de filtro', () => {
    renderWithRouter(<App />);
    const BTN_TYPE = screen.queryAllByTestId('pokemon-type-button');
    userEvent.click(BTN_TYPE[1]);
    const POKEMON_FIRE = screen.getByText(/charmander/i);
    expect(POKEMON_FIRE).toBeInTheDocument();

    const BTN_DRAGON = screen.getByRole('button', {
      name: /dragon/i,
    });
    userEvent.click(BTN_DRAGON);
    const POKEMON_DRAGON = screen.getByText(/dragonair/i);
    expect(POKEMON_DRAGON).toBeInTheDocument();

    const BTN_ALL = screen.getByRole('button', {
      name: /all/i,
    });
    userEvent.click(BTN_ALL);
    const PIKACHU = screen.getByText(/pikachu/i);
    expect(PIKACHU).toBeInTheDocument();
  });
});
