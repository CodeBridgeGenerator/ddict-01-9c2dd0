import React from "react";
import { render, screen } from "@testing-library/react";

import MaklumatDaerahCreateDialogComponent from "../MaklumatDaerahCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders maklumatDaerah create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <MaklumatDaerahCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("maklumatDaerah-create-dialog-component")).toBeInTheDocument();
});
