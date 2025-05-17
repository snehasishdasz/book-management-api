// src/utils/csvParser.ts

import fs from 'fs';
import readline from 'readline';
import { v4 as uuidv4 } from 'uuid';
import { Book } from '../models/book';

export const parseCSV = async (filePath: string): Promise<{ addedBooks: Book[]; errors: any[] }> => {
  const addedBooks: Book[] = [];
  const errors: any[] = [];

  const fileStream = fs.createReadStream(filePath);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  let lineNumber = 0;

  for await (const line of rl) {
    lineNumber++;
    if (lineNumber === 1) continue; // Skip header

    const [title, author, publishedYear] = line.split(',');

    if (!title || !author || isNaN(Number(publishedYear))) {
      errors.push({
        line: lineNumber,
        error: 'Missing or invalid fields',
        raw: line,
      });
      continue;
    }

    addedBooks.push({
      id: uuidv4(),
      title: title.trim(),
      author: author.trim(),
      publishedYear: Number(publishedYear),
    });
  }

  return { addedBooks, errors };
};
