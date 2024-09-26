import React from "react";
import { render, screen } from "@testing-library/react";

import MaklumatDaerahPage from "../MaklumatDaerahPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders maklumatDaerah page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <MaklumatDaerahPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("maklumatDaerah-datatable")).toBeInTheDocument();
    expect(screen.getByRole("maklumatDaerah-add-button")).toBeInTheDocument();
});
