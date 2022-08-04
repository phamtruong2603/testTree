import './App.css';
import 'antd/dist/antd.min.css';
import { Tree } from 'antd';
import React, { useState } from 'react';

const App = () => {
  const treeData = [
    {
      title: 'Chọn danh mục bài giảng',
      key: 'lesson',
      children: [
        {
          title: 'Lớp 1',
          key: 'lesson1',
        },
        {
          title: 'Lớp 2',
          key: 'lesson2',
        },
        {
          title: 'Lớp 3',
          key: 'lesson3',
        },
        {
          title: 'Lớp 4',
          key: 'lesson4',
        },
        {
          title: 'Lớp 5',
          key: 'lesson5',
        },
        {
          title: 'Lớp 6',
          key: 'lesson6',
          children: [
            {
              title: 'Môn khoa học tự nhiên',
              key: 'lesson6-1',
            },
            {
              title: 'Môn sinh',
              key: 'lesson6-2',
            },
          ]
        },
        {
          title: 'Lớp 7',
          key: 'lesson7',
          children: [
            {
              title: 'Môn khoa học tự nhiên',
              key: 'lesson7-1',
            },
            {
              title: 'Môn sinh',
              key: 'lesson7-2',
            },
          ]
        },
        {
          title: 'Lớp 8',
          key: 'lesson8',
          children: [
            {
              title: 'Môn khoa học tự nhiên',
              key: 'lesson8-1',
            },
          ]
        },
        {
          title: 'Lớp 9',
          key: 'lesson9',
        },
        {
          title: 'Lớp 10',
          key: 'lesson10',
        },
        {
          title: 'Lớp 11',
          key: 'lesson11',
        },
        {
          title: 'Lớp 12',
          key: 'lesson12',
        },
      ]
    },
    {
      title: 'Chọn danh mục bài tập lẻ',
      key: 'exercise',
      children: [
        {
          title: 'Lớp 1',
          key: 'exercise1',
        },
        {
          title: 'Lớp 2',
          key: 'exercise2',
        },
        {
          title: 'Lớp 3',
          key: 'exercise3',
        },
        {
          title: 'Lớp 4',
          key: 'exercise4',
        },
        {
          title: 'Lớp 5',
          key: 'exercise5',
        },
        {
          title: 'Lớp 6',
          key: 'exercise6',
          children: [
            {
              title: 'Môn khoa học tự nhiên',
              key: 'exercise6-1',
            },
            {
              title: 'Môn sinh',
              key: 'exercise6-2',
            },
          ]
        },
        {
          title: 'Lớp 7',
          key: 'exercise7',
          children: [
            {
              title: 'Môn khoa học tự nhiên',
              key: 'exercise7-1',
            },
            {
              title: 'Môn sinh',
              key: 'exercise7-2',
            },
          ]
        },
        {
          title: 'Lớp 8',
          key: 'exercise8',
          children: [
            {
              title: 'Môn khoa học tự nhiên',
              key: 'exercise8-1',
            },
          ]
        },
        {
          title: 'Lớp 9',
          key: 'exercise9',
        },
        {
          title: 'Lớp 10',
          key: 'exercise10',
        },
        {
          title: 'Lớp 11',
          key: 'exercise11',
        },
        {
          title: 'Lớp 12',
          key: 'exercise12',
        },
      ]
    },
    {
      title: '0-1',
      key: '0-1',
      children: [
        {
          title: '0-1-0-0',
          key: '0-1-0-0',
        },
        {
          title: '0-1-0-1',
          key: '0-1-0-1',
        },
        {
          title: '0-1-0-2',
          key: '0-1-0-2',
        },
      ],
    },
  ]

  const [expandedKeys, setExpandedKeys] = useState([]);
  const [checkedKeys, setCheckedKeys] = useState([]);
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [autoExpandParent, setAutoExpandParent] = useState(true);

  const onExpand = (expandedKeysValue) => {
    console.log('onExpand', expandedKeysValue);
    // if not set autoExpandParent to false, if children expanded, parent can not collapse.
    // or, you can remove all expanded children keys.

    setExpandedKeys(expandedKeysValue);
    setAutoExpandParent(false);
  };

  const onCheck = (checkedKeysValue) => {
    console.log('onCheck', checkedKeysValue);
    setCheckedKeys(checkedKeysValue);
  };

  const onSelect = (selectedKeysValue, info) => {
    console.log('onSelect', info);
    setSelectedKeys(selectedKeysValue);
  };

  return (
    <Tree
      checkable
      onExpand={onExpand}
      expandedKeys={expandedKeys}
      autoExpandParent={autoExpandParent}
      onCheck={onCheck}
      checkedKeys={checkedKeys}
      onSelect={onSelect}
      selectedKeys={selectedKeys}
      treeData={treeData}
    />
  );
};

export default App;
