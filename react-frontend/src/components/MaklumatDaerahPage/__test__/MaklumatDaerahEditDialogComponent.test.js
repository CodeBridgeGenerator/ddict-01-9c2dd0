import React from "react";
import { render, screen } from "@testing-library/react";

import MaklumatDaerahEditDialogComponent from "../MaklumatDaerahEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders maklumatDaerah edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <MaklumatDaerahEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("maklumatDaerah-edit-dialog-component")).toBeInTheDocument();
});
