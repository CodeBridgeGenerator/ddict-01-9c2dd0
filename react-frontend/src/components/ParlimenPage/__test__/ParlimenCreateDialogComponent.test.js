import React from "react";
import { render, screen } from "@testing-library/react";

import ParlimenCreateDialogComponent from "../ParlimenCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders parlimen create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ParlimenCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("parlimen-create-dialog-component")).toBeInTheDocument();
});
