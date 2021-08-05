import React from 'react'
import Video from 'react-native-video';

export default function VideoDesign() {
    return (
        <Video source={{ uri: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4" }}
            style={{ width: '100%', height: 600 }}
        />
    )
}
