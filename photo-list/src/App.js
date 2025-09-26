import React from 'react';

const photos = [
  {
    "albumId": 1,
    "id": 1,
    "title": "green",
    "url": "https://wallpapers.com/images/hd/cute-hedgehog-pictures-jxee4tcmpkv3pak9.jpg",
    "thumbnailUrl": "https://wallpapers.com/images/hd/cute-hedgehog-pictures-jxee4tcmpkv3pak9.jpg"
  },
  {
    "albumId": 1,
    "id": 2,
    "title": "purple",
    "url": "https://avatars.mds.yandex.net/i?id=fb26d4cda1965eee3df2bc30d5a4d5ed079422dd-4439530-images-thumbs&n=13",
    "thumbnailUrl": "https://avatars.mds.yandex.net/i?id=fb26d4cda1965eee3df2bc30d5a4d5ed079422dd-4439530-images-thumbs&n=13"
  }
];

const PhotoItem = ({ photo }) => {
  return (
    <li key={photo.id} style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
      <p><strong>ID:</strong> {photo.id}</p>
      <p><strong>Title:</strong> {photo.title}</p>
      <img src={photo.thumbnailUrl} alt={photo.title} style={{ width: '150px', height: '150px' }} />
      <p><a href={photo.url} target="_blank" rel="noopener noreferrer">Full Image Link</a></p>
    </li>
  );
};

const PhotoList = () => {
  const photoItems = photos.map(photo => (
    <PhotoItem key={photo.id} photo={photo} /> 
  ));

  return (
    <div>
      <h2>Список фотографий</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {photoItems}
      </ul>
    </div>
  );
};

const App = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Пример отображения списка</h1>
      <PhotoList />
    </div>
  );
};

export default App;