import React from 'react';
import KanjiDetail from './KanjiDetail';
import KanjiList from './KanjiList';

class App extends React.Component {
    state = { kanji: null };

    onKanjiDetailSelected = (kanji) => {
        this.setState({ kanji: kanji });
    }
    render() {
        return (
            <div>
                <KanjiDetail />
                <div className="ui container">
                    <KanjiList onSelectKanji={this.onKanjiDetailSelected} />
                </div>
            </div>

        );
    }
}

export default App;