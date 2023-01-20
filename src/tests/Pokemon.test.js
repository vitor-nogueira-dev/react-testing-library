import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Testando o componente Pokemon', () => {
  it('Testnado se é renderizado um card com as informações de determinado Pokémon', () => {
    renderWithRouter(<App />);
    const NAME = screen.getByText(/Pikachu/i);
    expect(NAME).toBeInTheDocument();

    const TYPE = screen.getAllByText('Electric');
    expect(TYPE[1]).toBeInTheDocument();
    const PESO = screen.getByText(/average weight: 6\.0 kg/i);
    expect(PESO).toBeInTheDocument();

    const IMG = screen.getByRole('img', {
      name: /pikachu sprite/i,
    });

    const SRC_IMG = 'https://archives.bulbagarden.net/media/upload/b/b2/Spr_5b_025_m.png';

    expect(IMG.src).toContain(SRC_IMG);
    expect(IMG).toBeInTheDocument();
    expect(IMG).toHaveAttribute('src', SRC_IMG);
  });
  it('Testando se o card do Pokémon indicado na Pokédex contém um link de navegação', () => {
    renderWithRouter(<App />);

    const LINK_DETAILS = screen.getByRole('link', {
      name: /more details/i,
    });

    act(() => {
      userEvent.click(LINK_DETAILS);
    });

    const TITLE_SUMMARY = screen.getByRole('heading', {
      name: /summary/i,
    });
    expect(TITLE_SUMMARY).toBeInTheDocument();

    const CHECK_BOX_FAVORITE = screen.getByRole('checkbox', {
      name: /pokémon favoritado\?/i,
    });
    expect(CHECK_BOX_FAVORITE).toBeInTheDocument();
    userEvent.click(CHECK_BOX_FAVORITE);

    const IMG_ICON = screen.getByRole('img', {
      name: 'Pikachu is marked as favorite',
    });
    const SRC_ICON = '/star-icon.svg';
    console.log(SRC_ICON);
    expect(IMG_ICON.src).toContain(SRC_ICON);
    expect(IMG_ICON).toHaveAttribute('src', SRC_ICON);
  });
  it('', () => {

  });
  it('', () => {

  });
});
