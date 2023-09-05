const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models/User');
const { List } = require('../models/List');
const { Anime } = require('../models/Anime');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        lists: async () => {
            return List.find();
        },
        users: async () => {
            return User.find();
        },
        user: async (parent, {userId}) => {
            return User.findOne({ _id: userId})
        },
    },

    Mutation: {
        addList: async (parent, {name, createdBy}, context)=> {
            if (context.user) {
                const list = await List.create({
                    name,
                    createdBy: context.user.username,
                });
                await User.findOneAndUpdate(
                    {_id: context.user._id},
                    { $addToSet: { lists: list._id}}
                );
                return list;
            }
            throw new AuthenticationError('Must Log in to make list');
        },
        addToWatchList: async (parent, { listId , animeName , animePoster }, context) => {
            if(context.user) {
                const newAnime = await Anime.create(
                    {name: animeName, poster: animePoster},
                )
                const updatedAnimeList = await List.findOneAndUpdate(
                    {_id: listId},
                    { $addToSet: { animes: newAnime}}
                )
                return updatedAnimeList;
            }
        },
        addUser: async (parent, {username, email, password}) => {
            const user = await User.create({username, email, password});
            const token = signToken(user);
            return { token, user};
        },
        login: async (parent, {email, password}) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError('No user with this email found');
            }
            const correctPassword = await user.isCorrectPassword(password);
            if (!correctPassword) {
                throw new AuthenticationError('Incorrect Password!');
            }
            const token = signToken(user);
            return { token, user };
        },
        removeUser: async (parent, {userId}) => {
            return User.findOneAndDelete({ _id: userId});
        },
        updateList: async (parent, { listId , newName }, context) => {
            if (context.user) {
                const updatedList = List.findOneAndUpdate(
                    {_id : listId},
                    {name: newName},
                    {new: true}
                );
                return updatedList;
            }
        }
    }
};

module.exports = resolvers;