import React from "react";

import {ComponentStory, ComponentMeta} from "@storybook/react"

import Loader from './Loader'

export default {
    title: "components/loader",
    component: Loader
} as ComponentMeta<typeof Loader>;

export const PrimaryLoader = () => {
    return <Loader />
}