import { Grid } from '@mui/material'
import React from 'react'
import TextItem from '../UI/TextItem'

export default function TaskOnePage() {
    const data= [
        {
          "header": "Заголовок 1",
          "options": ["элемент списка 1", "элемент списка 2", "элемент списка 3"],
          "text": "какой-то текст 1 текст какой-то 1 какой-то"
        },
        {
            "header": "Заголовок 2",
            "options": ["элемент списка 1", "элемент списка 2", "элемент списка 3","элемент списка 4" , "элемент списка 5"],
            "text": "какой-то текст 1 текст какой-то 1 какой-то"
          },
          {
            "header": "Заголовок 3",
            "options": ["элемент списка 4", "элемент списка 5", "элемент списка 6"],
            "text": "какой-то текст 1 текст какой-то 1 какой-то"
          }
      ]
  return (
    <>
      <Grid
        container
        justifyContent="space-around"
        columnGap={1}
        rowGap={2}
        marginTop={4}
        flex="flex"
      >
        {data?.map((item, index) => (
          <Grid item xs={3.5}>
            <TextItem
              key={index}
              item={item}
            />
          </Grid>
        ))}
      </Grid> </>  )
}
