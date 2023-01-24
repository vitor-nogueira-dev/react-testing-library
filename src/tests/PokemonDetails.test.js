import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Testando o componente PokemonDetails', () => {
  it('', () => {
    renderWithRouter(<App />);
    const BTN_FIRE = screen.getByRole('button', {
      name: /fire/i,
    });
    userEvent.click(BTN_FIRE);

    const LINK_DETAILS = screen.getByRole('link', {
      name: /more details/i,
    });
    userEvent.click(LINK_DETAILS);

    const TITLE = screen.getByRole('heading', {
      name: /charmander details/i,
      level: 2,
    });
    expect(TITLE).toBeInTheDocument();
    expect(LINK_DETAILS).not.toBeInTheDocument();

    const SUMMARY = screen.getByRole('heading', {
      name: /summary/i,
      level: 2,
    });
    expect(SUMMARY).toBeDefined();

    const PARAGRAPH = screen.getByText(
      /the flame on its tail shows the strength of its life force\. if it is weak, the flame also burns weakly\./i,
    );
    expect(PARAGRAPH).toBeDefined();
  });
  it('Testando se existe na página uma seção com os mapas contendo as localizações do Pokémon:', () => {
    renderWithRouter(<App />);
    const BNT_PSYCHIC = screen.getByRole('button', {
      name: /psychic/i,
    });
    expect(BNT_PSYCHIC).toBeInTheDocument();
    userEvent.click(BNT_PSYCHIC);

    const LINK_DETAILS = screen.getByRole('link', {
      name: /more details/i,
    });
    expect(LINK_DETAILS).toBeInTheDocument();
    userEvent.click(LINK_DETAILS);

    const TITLE_MAP = screen.getByRole('heading', {
      name: /game locations of alakazam/i,
      level: 2,
    });
    expect(TITLE_MAP).toBeInTheDocument();

    const IMG_MAP = screen.getByRole('img', {
      name: /alakazam location/i,
    });
    const SRC_MAP = 'https://archives.bulbagarden.net/media/upload/4/44/Unova_Accumula_Town_Map.png';
    expect(IMG_MAP.src).toContain(SRC_MAP);
    expect(IMG_MAP).toHaveAttribute('src', SRC_MAP);

    const TXT_MAP = screen.getByText(/unova accumula town/i);
    expect(TXT_MAP).toBeInTheDocument();
  });

  it('Testando se é possível favoritar um Pokémon, através da página de detalhes', () => {
    renderWithRouter(<App />);
    const BNT_PSYCHIC = screen.getByRole('button', {
      name: /psychic/i,
    });
    expect(BNT_PSYCHIC).toBeInTheDocument();
    userEvent.click(BNT_PSYCHIC);

    const LINK_DETAILS = screen.getByRole('link', {
      name: /more details/i,
    });
    expect(LINK_DETAILS).toBeInTheDocument();
    userEvent.click(LINK_DETAILS);

    const CHECK_BOX_FAVORITE = screen.getByRole('checkbox', {
      name: /pokémon favoritado\?/i,
    });

    expect(CHECK_BOX_FAVORITE).toBeInTheDocument();
    userEvent.click(CHECK_BOX_FAVORITE);

    expect(CHECK_BOX_FAVORITE.checked).toBeTruthy();
  });
});
