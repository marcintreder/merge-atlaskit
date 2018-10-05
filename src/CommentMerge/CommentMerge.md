# Comment Merge

```javascript
<CommentMerge 
    type="author"
    author="John Smith"
    edited="edited"
    restrictedTo="Admins Only"
    time="30 August, 2016"
    content="Content goes here."
    actions={["edit","reply","like"]}
    avatar={
        <AvatarMerge 
            src="https://api.adorable.io/avatars/285/a@uxpin.com.png" 
            label="Atlaskit avatar" 
            size="medium" />}
    
/>
```