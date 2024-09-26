import React from "react";
import { render, screen } from "@testing-library/react";

import ParlimenPage from "../ParlimenPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders parlimen page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ParlimenPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("parlimen-datatable")).toBeInTheDocument();
    expect(screen.getByRole("parlimen-add-button")).toBeInTheDocument();
});
