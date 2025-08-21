import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'data.json');

const readData = () => {
  const jsonData = fs.readFileSync(dataFilePath, 'utf-8');
  return JSON.parse(jsonData);
};

const writeData = (data: User) => {
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  const { id, fullName, username, password, age } = req.body;

  let users = readData();

  switch (method) {
    case 'GET':
      if (req.query.id) {
        // Trả về user cụ thể dựa trên ID
        const userId = parseInt(req.query.id as string, 10);
        const user = users.find((user: User) => user.id === userId);
        if (user) {
          res.status(200).json(user);
        } else {
          res.status(404).json({ message: 'User not found' });
        }
      } else {
        // Trả về danh sách user
        res.status(200).json(users);
      }      
      break;
    case 'POST':
      // Thêm một user mới
      const maxId = users.reduce((max:number, user:User) => (user.id > max ? user.id : max), 0);
      const newUser = { id: maxId + 1, fullName, username, password, age };
      users.push(newUser);
      writeData(users);
      res.status(201).json(newUser);
      break;
    case 'PUT':
      // Sửa một user
      const userIndex = users.findIndex((user: User) => user.id === id);
      if (userIndex !== -1) {
        users[userIndex] = { id, fullName, username, password, age };
        writeData(users);
        res.status(200).json(users[userIndex]);
      } else {
        res.status(404).json({ message: 'User not found' });
      }
      break;
    case 'DELETE':
      // Xóa một user
      const updatedUsers = users.filter((user: User) => user.id !== id);
      if (updatedUsers.length !== users.length) {
        users = updatedUsers;
        writeData(users);
        res.status(200).json({ message: 'User deleted' });
      } else {
        res.status(404).json({ message: 'User not found' });
      }
      break;
    default:
      res.status(405).json({ message: 'Method not allowed' });
      break;
  }
}