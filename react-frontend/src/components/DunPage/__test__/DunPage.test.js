import React from "react";
import { render, screen } from "@testing-library/react";

import DunPage from "../DunPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders dun page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <DunPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("dun-datatable")).toBeInTheDocument();
    expect(screen.getByRole("dun-add-button")).toBeInTheDocument();
});
