# Leetcode Challenges<!-- omit in toc -->

# Table <!-- omit in toc -->

- [1. Purpose](#1-purpose)
- [2. Features / content](#2-features--content)
- [3. Mockups](#3-mockups)
  - [3.1. Mobile](#31-mobile)
  - [3.2. Desktop](#32-desktop)
- [4. Libraries](#4-libraries)
- [5. Process](#5-process)
  - [5.1. Architecture](#51-architecture)
    - [5.1.1. Target devices](#511-target-devices)
    - [5.1.2. The challenges](#512-the-challenges)

# 1. Purpose

This website allows me to showcase to a potential recruiter my skills when it comes to solving problems from the Leetcode website.

# 2. Features / content

To serve this purpose, the recruitor will want to be able to:

1. Peer into my thinking / problem solving process: challenges should contain a section displaying this
2. The recruitor should get a sense of the different types of problems I have solved: there should be a filter by theme
3. Create some sort of a button that allows a recruitor to send me a challenge (like email me or something) that they think would be great for me to try to solve. Is a nice way to get in touch!

# 3. Mockups

These mockups were made in Figma with a 3 hours deadline.

## 3.1. Mobile

![Mobile view](https://i.ibb.co/hdkWsf0/mobile-view.png)

## 3.2. Desktop

![Desktop view](https://i.ibb.co/jfFk7JB/desktop.png)

# 4. Libraries

1. Styled components for styling
2. prismjs to display code

# 5. Process

## 5.1. Architecture

First, I am trying to figure out what architecture is going to be the most appropriate, given the features and content shown on the mockups.

### 5.1.1. Target devices

There are 2 main target devices with different headers and layout: mobile and desktop

### 5.1.2. The challenges

There is a need to display the challenges based on their difficulty and topics. There are various ways to achieve this.

1. Conditional rendering: clicking on a topic would set the state of a `useState` value, which would
