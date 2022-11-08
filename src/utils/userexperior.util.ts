import UserExperior from 'react-native-userexperior';

export const UserExperiorMaskView = (view: any) => {
    if(view !== null) {
        UserExperior.addInSecureViewBucket(view);
    }
};