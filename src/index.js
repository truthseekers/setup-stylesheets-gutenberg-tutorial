console.log("hello from new-plugin js lala");
import { registerBlockType } from '@wordpress/blocks';
import './style.editor.scss';

registerBlockType('truth/new-plugin-block', {
    title: 'new plugin block',
    icon: 'smiley',
    category: 'layout',
    edit: ({ className }) => <div className={className}>I am the edit test</div>,
    // edit: () => <div>I am the edit test</div>,
    save: () => <div>I am the frontend test!!</div>,
});
