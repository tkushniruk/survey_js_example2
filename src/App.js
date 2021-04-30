import logo from './logo.svg'
import React, { Component } from 'react'
import './App.css'
import 'survey-react/survey.css'
import * as Survey from 'survey-react'

var Json = {
  title: 'Product/Market Fit Survey Template',
  pages: [
    {
      name: 'page1',
      elements: [
        {
          type: 'radiogroup',
          name: 'smoker_or_exsmoker',
          title: 'Are you a smoker or ex-smoker',
          hasOther: true,
          choices: [
            {
              value: 'item1',
              text: "I'm smoker",
            },
            {
              value: 'item2',
              text: "I'm ex smoker",
            },
            {
              value: 'item3',
              text: 'No',
            },
          ],
          colCount: 1,
        },
        {
          type: 'text',
          title: 'How long do you smoking',
          visibleIf: "{smoker_or_exsmoker} == 'item1'",
        },
        {
          type: 'text',
          name: 'how_many1',
          title: 'How many times did you smoke during a day',
          visibleIf: "{smoker_or_exsmoker} == 'item1'",
        },
        {
          type: 'text',
          name: 'how_long2',
          title: 'How long did you smoking',
          visibleIf: "{smoker_or_exsmoker} == 'item2'",
        },
        {
          type: 'text',
          name: 'how_many2',
          title: 'How many times did you smoke during a day',
          visibleIf: "{smoker_or_exsmoker} == 'item2'",
        },
      ],
    },
    {
      name: 'page2',
      elements: [
        {
          type: 'radiogroup',
          name: 'product_fit',
          title: 'How would you feel if you could no longer use the product?',
          isRequired: true,
          choices: [
            {
              value: '3',
              text: 'Very disappointed',
            },
            {
              value: '2',
              text: 'Somewhat disappointed',
            },
            {
              value: '1',
              text: 'Not disappointed',
            },
          ],
        },
        {
          type: 'comment',
          name: 'product_fit_comment',
          visibleIf: '{product_fit} notempty',
          title: 'Please help us understand why you selected the answer above',
        },
      ],
    },
    {
      name: 'page3',
      elements: [
        {
          type: 'radiogroup',
          name: 'product_alternative',
          title:
            'What would you use as an alternative if [the product] were no\nlonger available?',
          hasOther: true,
          choices: [
            'Alternative 1',
            'Alternative 2',
            'Alternative 3',
            'Alternative 4',
            'Alternative 5',
            'Alternative 6',
          ],
          otherText: 'Other (please name)',
          colCount: 3,
        },
        {
          type: 'radiogroup',
          name: 'product_benefit',
          title:
            'What is the primary benefit that you have received from the\nproduct?',
          hasOther: true,
          choices: [
            'Benefit 1',
            'Benefit 2',
            'Benefit 3',
            'Benefit 4',
            'Benefit 5',
            'Benefit 6',
          ],
          colCount: 3,
        },
        {
          type: 'radiogroup',
          name: 'product_recommend',
          title: 'Have you recommended the product to anyone?',
          choices: ['Yes', 'No'],
        },
      ],
    },
    {
      name: 'page4',
      elements: [
        {
          type: 'rating',
          name: 'nps_score',
          title:
            'How likely are you to recommend the product to a friend or\ncolleague? ',
          isRequired: true,
          rateMin: 0,
          rateMax: 10,
          minRateDescription: 'Most unlikely',
          maxRateDescription: 'Most likely',
        },
        {
          type: 'radiogroup',
          name: 'favorite_functionality',
          title: "What's your favorite functionality / add-on for the product?",
          hasOther: true,
          choices: [
            'Feature 1',
            'Feature 2',
            'Feature 3',
            'Feature 4',
            'Feature 5',
            'Feature 6',
          ],
          colCount: 3,
        },
        {
          type: 'comment',
          name: 'product_improvement',
          title:
            'How could the product be improved to better meet your\nneeds?',
        },
      ],
    },
    {
      name: 'page5',
      elements: [
        {
          type: 'multipletext',
          name: 'contact_customer',
          title: 'Want us to follow-up? Leave your name and email here:',
          items: [
            {
              name: 'Name',
            },
            {
              name: 'E-mail',
              inputType: 'email',
              validators: [
                {
                  type: 'email',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}

function App() {
  return (
    <div className='App'>
      <Survey.Survey json={Json} />
    </div>
  )
}

export default App
