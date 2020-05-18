import React, {Component} from 'react';
import {SectionList, StyleSheet, Text, View} from 'react-native';

export default class SectionListBasics extends Component {
    state = {
        sections: [
            {title: 'D', data: ['Devin', 'Dan', 'Dominic','Dominic','Dominic1','Dominic2','Dominic3','Dominic4','Dominic5','Dominic3','Dominic4','Dominic5']},
            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie', 'Jimmy', 'Joel', 'John', 'Julie', 'Jimmy', 'Joel', 'John', 'Julie', 'Jimmy', 'Joel', 'John', 'Julie']},
        ]
    }

    render() {
        return (
            <View style={styles.container}>
                <SectionList sections={this.state.sections}
                             renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
                             renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                             keyExtractor={(item, index) => index}

                >

                </SectionList>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        paddingTop: 22
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    }
})